import { Media } from "@class/Media"
import { Channel } from "@os/Channel"
import { invoke } from "@tauri-apps/api/primitives"

export const executeFfmpeg = async (command: string[], channel: Channel, _: Media[]) => {
    await invoke('ffmpeg', {
        args: command,
        onEvent: channel
    })
}