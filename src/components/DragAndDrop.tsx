import {
    HiVideoCamera,
    HiMusicNote,
    HiLightningBolt
} from "react-icons/hi";
import classnames from 'classnames'
import { useLocation } from "react-router-dom";

import LoadingCircle from "@components/LoadingCircle";
import { useDropStore } from "@stores/drop";
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'


export const DragAndDrop = () => {
    const dropStore = useDropStore()
    const location = useLocation()
    const onDrop = useCallback(acceptedFiles => {
        dropStore.addFilesWeb(acceptedFiles, location.pathname)
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return (
        <div className="flex items-center justify-center w-full h-full"  {...getRootProps()}>
            <label
                htmlFor="dropzone-file"
                className={classnames(
                    'flex flex-col items-center justify-center w-full h-full border-2 border-dashed rounded-lg cursor-pointer',
                    isDragActive || dropStore.hover ? 'bg-gray-100 dark:border-gray-500 dark:bg-gray-600' : 'border-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                )}
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className="flex items-center space-x-2">
                    <HiVideoCamera className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                    <HiLightningBolt className="w-4 h-4 mb-4 text-gray-500 dark:text-gray-400"/>
                        <HiMusicNote className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                    </div>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to select file</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Select any video or audio file</p>

                    {dropStore.loadingFile && (
                        <div className="mt-6 text-gray-500 dark:text-gray-400 flex items-center">
                            <LoadingCircle className="text-black dark:text-gray-400"/> Loading Media
                        </div>
                    )}
                </div>
                <input 
                    id="dropzone-file" 
                    type="file" 
                    className="hidden" 
                    {...getInputProps()}
                    onChange={(event) => {
                        const file = event.target.files[0];

                        if (import.meta.env.VITE_BUILD_TARGET === 'web') {
                            dropStore.addFilesWeb([file], location.pathname)
                        } else {
                            dropStore.addFiles([file.webkitRelativePath], location.pathname)
                        }
                    }}
                />
            </label>
        </div> 
    )
}