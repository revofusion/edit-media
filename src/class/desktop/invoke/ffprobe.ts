import * as Sentry from "@sentry/browser";
import { invoke } from "@tauri-apps/api/primitives";
import { FfprobeRawResponse, FfprobeResponse, processFfprobeRaw } from "@formatters/ffprobeStreams";
import { Media } from "@class/Media";

export const getFileMetadata = async (input: Media): Promise<FfprobeResponse> => {
  const args = [
    '-loglevel', 'fatal',
    '-print_format',  'json',
    '-show_format',
    '-hide_banner',
    '-show_streams',
    '-i', input.path
  ]

  try {
    const parsed: FfprobeRawResponse = await invoke('ffprobe', { args })
    if (!Object.keys(parsed).length) {
      throw new Error('Could not read file metadata')
    }
    return processFfprobeRaw(parsed)
  } catch (e) {
    console.error(e)
    Sentry.captureException({
      error: e,
      args
    })
    return null
  }
}