// Remove popup on windows
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;
use window_vibrancy::{apply_vibrancy, NSVisualEffectMaterial};
use tauri::{App,  Runtime};

mod utils;
mod constants;
mod handlers;

pub use handlers::ffmpeg;
pub use handlers::ffprobe;
pub use handlers::ffmpeg_path;
pub use handlers::show_in_folder;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  run_app(tauri::Builder::default(), |_app| {})
}

pub fn run_app<R: Runtime, F: FnOnce(&App<R>) + Send + 'static>(
  _builder: tauri::Builder<R>,
  _setup: F,
) {
    tauri::Builder::default()
      .setup(|app| {
        let window = app.get_window("main").unwrap();
  
        #[cfg(target_os = "macos")]
        apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None)
          .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");
  
        // #[cfg(target_os = "windows")]
        // apply_blur(&window, Some((18, 18, 18, 125)))
        //   .expect("Unsupported platform! 'apply_blur' is only supported on Windows");
  
        Ok(())
      })
      .invoke_handler(tauri::generate_handler![
        ffmpeg,
        ffmpeg_path,
        show_in_folder,
        ffprobe
      ])
      .plugin(tauri_plugin_store::Builder::default().build())
      .plugin(tauri_plugin_persisted_scope::init())
      .plugin(tauri_plugin_fs::init())
      .plugin(tauri_plugin_shell::init())
      .plugin(tauri_plugin_dialog::init())
      .plugin(tauri_plugin_http::init())
      .plugin(tauri_plugin_os::init())
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
  }