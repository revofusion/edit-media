import { useState, type FC } from "react";
import * as Sentry from "@sentry/browser";
import OpenPage from "../components/Chat/OpenPage";
import FileTree from "../components/Chat/FileTree";
import InputsOutputs from "../components/Chat/InputsOutputs";
import InstructionsBox from "../components/Chat/InstructionsBox";
import { apiAudioVideo } from "@class/api/firebase";
import { useConfigStore } from "../stores/config";
import { Media } from "@class/Media";
import { path } from "@os/Path";
import { useFfmpeg } from "@class/hooks/useFfmpeg";

const ChatPage: FC = function () {
  const configStore = useConfigStore()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [instructions, setInstructions] = useState('')
  const [inputs, setInputs] = useState([] as Media[])
  const [outputs, setOutputs] = useState([] as Media[])
  const { progress, processFfmpegCommand, resetFfmpeg } = useFfmpeg()
  
  if (!configStore.directory) {
    return (
      <OpenPage />
    )
  }

  const addFile = async (ids) => {
    // No ids provided
    if (!ids || !ids.length || inputs.find(_ => _.path === ids[0])) {
      return
    }

    // Add to inputs
    const input = await Media.fromPathWithMetadata(ids[0])
    setInputs(inputs.concat(input))
  }

  const removeFile = async (media: Media) => {
    setInputs(inputs.filter(_ => _.src !== media.src))
  }

  const sendInstructions = async () => {
    if (loading || !inputs.length) {
      return
    }

    setLoading(true)
    setOutputs([])
    setError('')
    resetFfmpeg()

    const onError = (e: { message: string, errors?: string[] }) => {
      console.error(e)
      setLoading(false)
      setError(e.message)
      Sentry.captureException(e);
    }
    
    try {
      // Create folder
      const outputSubFolderName = `Output-${+new Date()}`
      const outputSubFolderPath = await path.editMediaOutputSubfolderDir(outputSubFolderName)

      // Retrieve default font path
      const defaultFontPath = await path.getDefaultFontPath();

      // Initialize retry and error handling variables
      const maxRetries = 1;
      let retries = 0;
      let errors = [];

      // Initialize command processing variables
      let completed = 0;
      let commands: string[][] = [];

      do {
        // Reset completed
        completed = 0;

        // Get AI API response
        const inputData = inputs.map(_ => _.metadata.format)
        const response = await apiAudioVideo({
          instructions,
          outputSubFolderPath,
          inputsLength: inputs.length,
          inputData,
          defaultFontPath,
          errors,
          errorCommands: errors.length ? commands.map(_ => ['ffmpeg'].concat(_).join(' ')) : []
        });

        // Get commands
        commands = response.data.data;
        if (!commands) {
          throw new Error('Could not generate result, try being more specific in instructions');
        }

        // Process each command
        try {
          for (const command of commands) {
            await processFfmpegCommand(command, inputs);
            completed++;
          }
        } catch (e) {
          if (retries === maxRetries) {
            throw e;
          }
          retries++;
          errors = e.errors;
        }
      } while (completed !== commands.length);

      // Success
      const verifiedOutputs = await path.readDir(outputSubFolderPath);
      const newOutputs = []
      for (const verifiedOutput of verifiedOutputs) {
        newOutputs.push(await Media.fromPath(verifiedOutput.path))
      }

      setOutputs(newOutputs)
      setLoading(false)
    } catch (e) {
      onError(e)
    }
  }

  return (
    <div className="h-full w-full flex">
      <FileTree
        addFile={addFile}
      >
        <div className="h-full w-full flex flex-col justify-between">
          <InputsOutputs
            inputs={inputs}
            outputs={outputs}
            removeFile={removeFile}
          />

          <InstructionsBox
            instructions={instructions}
            setInstructions={setInstructions}
            sendInstructions={sendInstructions}
            loading={loading}
            progress={progress}
            error={error}
            isDisabled={!inputs.length}
          />
        </div>
      </FileTree>
    </div>
  );
};


export default ChatPage;
