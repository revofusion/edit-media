import * as Sentry from "@sentry/browser";
import { FfprobeRawResponse, FfprobeResponse, processFfprobeRaw } from "@formatters/ffprobeStreams";
import { Media } from "@class/Media";

const worker2 = new Worker('ffprobe-worker.js');

export const getFileMetadata = async (input: Media): Promise<FfprobeResponse> => {
  try {
    return await new Promise((resolve, reject) => {
      worker2.onmessage = (e: { data: FfprobeRawResponse }) => {
        if (!Object.keys(e.data).length) {
          reject(new Error('Could not read file metadata'))
        } else {
          resolve(processFfprobeRaw(e.data))
        }
      }
      worker2.postMessage([ 'get_file_info', input.file ]);
    })
  } catch (e) {
    console.error('getFileMetadata')
    console.error(e)
    Sentry.captureException({
      error: e
    })
    return null
  }
}