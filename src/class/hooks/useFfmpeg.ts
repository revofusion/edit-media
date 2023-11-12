import { useState } from "react";
import { useInterval } from "usehooks-ts";

import { executeFfmpeg } from "@os/invoke/ffmpeg";
import { Channel } from "@os/Channel";
import { path } from "@os/Path";
import { Media } from "@class/Media";

export const useFfmpeg = () => {
    const [progress, setProgress] = useState(0)
    const [incrementProgress, setIncrementProgress] = useState(false)

    useInterval(
      () => setProgress(prevProgress => prevProgress + (1.25 * Math.random())),
      incrementProgress ? 1000 : null,
    )

    const resetFfmpeg = () => {
        setProgress(0)
        setIncrementProgress((false))
    }

    const processFfmpegCommand = (command: string[], medias: Media[]) => {
        return new Promise<void>(async (resolve, reject) => {          // Get input
          const commandInputPath = command[command.indexOf("-i") + 1];
          const input = medias.find(input => input.metadata.format.filename === commandInputPath) ||
                        medias.find(input => input.metadata.format.filename.split(path.sep).pop() === commandInputPath.split(path.sep).pop());

          // Create channel
          const errors = []
          const channel = new Channel()
          
          channel.onmessage = async ({ type, level, data }: { type: string, level: string, data: any }) => {
            if (type === 'log') {
              switch(level) {
                case "fatal":
                case "error":
                  errors.push(data)
                  break;
                case "log":
                  break;
              }
            } else if (type === 'progress' && input) {
              setIncrementProgress(false)
              const timeParts = data.time.split(':');
              const timeInSeconds = (+timeParts[0]) * 60 * 60 + (+timeParts[1]) * 60 + (+timeParts[2]);
              const newProgress = (timeInSeconds / +input.metadata.format.duration) * 100
              setProgress(progress => Math.min(progress < +newProgress ? +newProgress : progress, 100))
            } else if (type === 'done') {
              if (errors.length) {
                resetFfmpeg()
                reject({
                  message: 'Could not generate result, try being more specific in instructions',
                  errors,
                })
              } else {
                setProgress(100)
                resolve();
              }
            }
          }
      
          // Invoke
          console.log('argsArray', command)
          await executeFfmpeg(command, channel, medias)
        });
    }

    return {
        resetFfmpeg,
        progress,
        processFfmpegCommand
    }
}