use serde_json::Value;
use std::process::Command;
use tauri::command;
use crate::utils::{resolve_ffprobe_path, create_tauri_error};

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;
#[cfg(target_os = "windows")]
const CREATE_NO_WINDOW: u32 = 0x08000000;

#[command]
pub async fn ffprobe(
    _app: tauri::AppHandle,
    args: Vec<String>
) -> Result<Value, tauri::Error>  {
    let mut command = Command::new(resolve_ffprobe_path());
    
    #[cfg(target_os = "windows")]
    command.creation_flags(CREATE_NO_WINDOW);

    let output = command
        .args(args)
        .output()
        .map_err(|e| create_tauri_error(e.to_string()))?;

    if !output.status.success() {
        return Err(create_tauri_error(String::from_utf8_lossy(&output.stderr).to_string()));
    }

    serde_json::from_str(&String::from_utf8_lossy(&output.stdout))
        .map_err(|e| create_tauri_error(e.to_string()))
}