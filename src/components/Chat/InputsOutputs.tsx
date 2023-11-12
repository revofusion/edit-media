import { HiTrash, HiSearch } from "react-icons/hi"
import classNames from "classnames";

import isVideo from "@helpers/isVideo"
import isAudio from "@helpers/isAudio"
import AudioPlayer from "@components/AudioPlayer"
import { showInFinder } from "@os/invoke/showInFinder"
import { Media } from "@class/Media";
import { Tooltip } from "flowbite-react";

export const RenderMedia = ({ media, type, removeFile }: { media: Media, type: 'input' | 'output', removeFile: (media: Media) => void }) => {
  return (
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 sm:h-64">
        {
          isAudio(media.name)
              ? (<AudioPlayer url={media.src} />)
              : isVideo(media.name)
                  ? (<video src={media.src} controls autoPlay muted />)
                  : (<img src={media.src} />)
        }
      </div>
      <h3 className="mt-2 text-center mb-6 text-sm text-gray-500 dark:text-white">
          <div className="flex justify-center items-center">
            <span className="truncate">{media.name}</span>
            {type === 'input' && (
              <HiTrash onClick={() => removeFile(media)} className="text-red-700 cursor-pointer inline ml-2"/>
            )}

            <span  className="cursor-pointer inline ml-2">
            <Tooltip content={`File is saved at ${media.path}`}>
              <HiSearch
                onClick={() => showInFinder(media.path)}
              />
            </Tooltip>
            </span>
          </div>
      </h3>
      {/* <p className="text-base font-semibold text-gray-900">Description</p> */}
    </div>
  )
}

const InputsOutputs = function ({ inputs, outputs, removeFile }: { inputs: Media[], outputs: Media[],  removeFile: (media: Media) => void }) {
    return (
        <div className="w-full dark:text-white overflow-y-scroll no-scrollbar">
          <div className="bg-gray-100 dark:bg-gray-800">
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-8 lg:px-8">
              <div className="flex sm:items-baseline sm:justify-between">
                <h2 className="w-1/2 text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Inputs</h2>
                <h2 className="w-1/2 text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Outputs</h2>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-y-6 sm:gap-x-6 lg:gap-8">
                <div className={classNames(
                    "mt-6 grid gap-y-6 sm:gap-x-6 lg:gap-8",
                    inputs.length === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
                )}>
                  {
                    inputs.map(_ => (
                      <RenderMedia media={_} type="input" key={_.name} removeFile={removeFile} />
                    ))
                  }
                </div>
                <div className={classNames(
                    "mt-6 grid gap-y-6 sm:gap-x-6 lg:gap-8",
                    outputs.length === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
                )}>
                  {
                    outputs.map(_ => (
                      <RenderMedia media={_} type="output" key={_.name} removeFile={removeFile}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default InputsOutputs