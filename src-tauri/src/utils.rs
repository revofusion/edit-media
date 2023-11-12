use std::{path::PathBuf, env};
// use sysinfo::{System, SystemExt};
use tauri::{Manager, path::BaseDirectory};
use crate::constants::{PYTHON_PATH, FFMPEG_PATH, FFPROBE_PATH};

// pub fn get_free_memory() -> u64 {
//     let mut sys = System::new_all();
//     sys.refresh_memory();
//     return sys.total_memory() - sys.used_memory();
// }

pub fn resolve_resource(app: &tauri::AppHandle, resource_path: &str) -> PathBuf {
    let error = format!("failed to resolve resource dir for {}", resource_path);
    
    return app
        .path()
        .resolve(resource_path, BaseDirectory::Resource)
        .expect(&error);
}

pub fn resolve_python_path(app: &tauri::AppHandle) -> PathBuf {
    return resolve_resource(&app, PYTHON_PATH);
}

pub fn resolve_ffmpeg_path() -> PathBuf {
    let current_path = env::current_exe().unwrap();
    let parent_dir = current_path.parent().unwrap();
    let ffmpeg_path = parent_dir.join(FFMPEG_PATH);
    ffmpeg_path
}

pub fn resolve_ffprobe_path() -> PathBuf {
    let current_path = env::current_exe().unwrap();
    let parent_dir = current_path.parent().unwrap();
    let ffprobe_path = parent_dir.join(FFPROBE_PATH);
    ffprobe_path
}

pub fn create_tauri_error(error_message: String) -> tauri::Error {
    tauri::Error::Io(std::io::Error::new(std::io::ErrorKind::Other, error_message))
}


// pub fn resolve_resource_dir(app: &tauri::AppHandle) -> PathBuf {
//     return app.path().resource_dir().expect("failed to get resource dir");
// }