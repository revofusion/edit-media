import { Media } from '@class/Media';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import { formatMilliSeconds } from '@helpers/formatSeconds';
import { Channel } from '@os/Channel';
import { path } from '@os/Path';

const ffmpeg = new FFmpeg()

export const executeFfmpeg = async (command: string[], channel: Channel, medias: Media[]) => {
    const handles = { '/': true }
    const errors = []

    const mkdirRecursive = async (_path: string) => {
        let walked = ''
        for (const subFolder of _path.split(path.sep).slice(0, -1)) {
            if (!subFolder) {
                continue
            }
            walked += '/' + subFolder
            if (handles[walked]) {
                continue
            }
            await ffmpeg.createDir(walked)
            handles[walked] = true
        }
    }

    try {
        // Load FFMPEG
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm'
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        
        // Create output dir in WASM FS
        const outputPath = command[command.length - 1]
        await mkdirRecursive(outputPath)

        // Write inputs to WASM FS 
        const inputs = command.reduce((inputs, arg, index) => arg === '-i' ? inputs.concat(command[index + 1]) : inputs, [] as string[])
        for (const input of inputs) {
            const media = medias.find(_ => _.name === input) || medias.find(_ => _.name.split(path.sep).pop() === input.split(path.sep).pop())
            const file = await fetchFile(media.file)
            await mkdirRecursive(input)
            await ffmpeg.writeFile(input, file);
        }

        // FFMPEG listeners
        ffmpeg.on('log', ({ type: _type, message }) => {
            const msg = message.toLowerCase()
            if (msg.includes('error') || msg.includes('fatal') || msg.includes('does not contain')) {
                errors.push(message)
            }
        });
        ffmpeg.on('progress', ({ time }) => {
            channel.onmessage({ type: 'progress', data: { time: formatMilliSeconds(Math.round(time / 1000), 'HH:mm:ss.SSS') } })
        });

        // Execute ffmped command
        await ffmpeg.exec(command);
        if (errors.length) {
            throw new Error('Failed to create')
        }

        // Copy over to user FS
        const data = await ffmpeg.readFile(outputPath, "binary");
        await path.writeFile(outputPath, data as Uint8Array)
    } catch(e) {
        if (errors.length) {
            for (const error of errors) {
                channel.onmessage({ type: 'log', level: 'error', data: error })
            }
        } else {
            channel.onmessage({ type: 'log', level: 'error', data: e.message })
        }
    } finally {
        channel.onmessage({ type: 'done' })
    }
}