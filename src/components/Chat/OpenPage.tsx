import { Button } from "flowbite-react";
import { HiCollection } from "react-icons/hi";
import { useOpenDirectory } from "@class/hooks/useDirectory";

const OpenPage = function () {
    const { openDirectory } = useOpenDirectory()
    
    return (
        <div className="flex h-full flex-col items-center justify-center py-16">
            <img alt="" src="/images/illustrations/404.svg" className="max-w-sm" />

            <h1 className="mb-6 text-2xl font-bold dark:text-white md:text-5xl">
                Open a folder
            </h1>
            <p className="mb-6 w-4/5 max-w-xl text-center text-lg text-gray-500 dark:text-gray-300">
                Select a folder to begin editing media
            </p>
            <Button onClick={() => openDirectory()}>
                <div className="mr-1 flex items-center gap-x-2">
                    <HiCollection className="text-xl" /> Open Folder
                </div>
            </Button>
        </div>
    );
}

export default OpenPage