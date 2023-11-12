use serde_json::Value;
use tauri::{command, ipc::Channel};
use ffmpeg_sidecar::{
    command::FfmpegCommand,
    event::{FfmpegEvent, LogLevel}
};
use crate::utils::resolve_ffmpeg_path;

fn create_json_message(msg_type: &str, data: &str, level: Option<LogLevel>) -> Value {
    let log = match level {
        Some(LogLevel::Info) => "info",
        Some(LogLevel::Warning) => "warning",
        Some(LogLevel::Error) => "error",
        Some(LogLevel::Fatal) => "fatal",
        Some(LogLevel::Unknown) => "unknown",
        None => "",
    };
    let mut json = serde_json::json!({
        "type": msg_type,
        "data": data
    });
    if !log.is_empty() {
        json["level"] = serde_json::json!(log);
    }
    json
}

#[command]
pub async fn ffmpeg_path() -> Result<String, tauri::Error> {
    let ffmpeg_path = resolve_ffmpeg_path();
    return Ok(ffmpeg_path.to_str().unwrap().to_string());
}

#[command]
pub async fn ffmpeg(
    _app: tauri::AppHandle,
    args: Vec<String>,
    on_event: Channel
) -> Result<bool, tauri::Error>  {
    let ffmpeg_path = resolve_ffmpeg_path();

    let mut ffmpeg = FfmpegCommand::new_with_path(ffmpeg_path);

    #[cfg(target_os = "windows")]
    ffmpeg.create_no_window();

    let mut child = ffmpeg
        .args(args)
        .spawn()
        .map_err(|e| tauri::Error::Io(std::io::Error::new(std::io::ErrorKind::Other, e.to_string())))?;

    child
        .iter()
        .map_err(|e| tauri::Error::Io(std::io::Error::new(std::io::ErrorKind::Other, e.to_string())))?
        .for_each(|event| {
            match event {
                FfmpegEvent::Progress(progress) => {
                    let progress_json = serde_json::json!({
                        "type": "progress",
                        "data": {
                            "frame": progress.frame,
                            "fps": progress.fps,
                            "bitrate_kbps": progress.bitrate_kbps,
                            "speed": progress.speed,
                            "size_kb": progress.size_kb,
                            "time": progress.time,
                        }
                    });
                    let _ = on_event.send(progress_json);
                }
                FfmpegEvent::Log(_level, msg) => {
                    eprintln!("[ffmpeg] {}", msg); // <- granular log message from stderr
                    let _ = on_event.send(create_json_message("log", &msg, Some(_level)));
                }
                FfmpegEvent::Error(err) => {
                    let _ = on_event.send(create_json_message("error", &err, None));
                }
                FfmpegEvent::LogEOF | FfmpegEvent::Done => {
                    let _ = on_event.send(create_json_message("done", "", None));
                }
                _ => {}
            }
        });

    child.wait()?; // <- Wait for the child process to finish

    return Ok(true);
}
