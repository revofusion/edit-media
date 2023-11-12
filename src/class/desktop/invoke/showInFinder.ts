import { invoke } from "@tauri-apps/api/primitives"

export const showInFinder = async (path: string) => {
    await invoke('show_in_folder', {
        path: path
    })
}