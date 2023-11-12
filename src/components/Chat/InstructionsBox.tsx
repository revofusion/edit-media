import { HiFire, HiPaperAirplane } from "react-icons/hi"
import { Label, Textarea, Button } from "flowbite-react"
import { useEffect, useState } from "react";

import HelpfulCommands from "@components/Chat/HelpfulCommands";
import Voice from "@components/Chat/Voice";

const InstructionsBox = function ({
  instructions,
  setInstructions,
  sendInstructions,
  loading,
  progress,
  error,
  isDisabled
}: { instructions: string, setInstructions: (string) => void, sendInstructions: () => void, loading: boolean, progress: number, error: string, isDisabled: boolean }) {
  const [openHelpfulCommands, setOpenHelpfulCommands] = useState(false)
  const [isSend, setIsSend] = useState(false)

  useEffect(() => {
    if (isSend) {
      sendInstructions()
      setIsSend(false)
    }
  }, [instructions])

  return (
    <div className="w-full border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sticky bottom-0">
      <form className="pb-4 lg:px-4">
        <div>
          <Label htmlFor="reply-message" className="sr-only">
            Message
          </Label>
          <Textarea
            autoFocus
            id="reply-message"
            name="reply-message"
            rows={3}
            className="block w-full text-sm p-4 rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:text-white dark:placeholder-white"
            placeholder="Enter your instructions here..."
            value={instructions}
            onInput={(e) => setInstructions((e.target as HTMLTextAreaElement).value)}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                event.preventDefault();
                sendInstructions();
              }
            }}
          />
        </div>
      </form>

      <div className="items-center dark:divide-gray-700 sm:flex sm:divide-x sm:divide-gray-100 lg:pl-4">
        <div className="w-full mb-3 sm:mb-0 sm:flex sm:justify-between">
          <div className="flex space-y-3  sm:space-x-3 sm:space-y-0">
            <Button color="primary" onClick={() => sendInstructions()} disabled={isDisabled || loading}>
              <div className="flex items-center gap-x-2">
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <HiPaperAirplane className="text-xl" />
                )}
                { loading ? 'Loading' : 'Send' }
              </div>
            </Button>

            <Button color="secondary" onClick={() => setOpenHelpfulCommands(true)}>
              <div className="flex items-center gap-x-2 dark:text-white">
                <HiFire className="text-xl text-orange-500" />
                Popular Commands
              </div>
            </Button>


            {loading && progress ? (
              <div className="flex items-center dark:text-white">
                Progress: {progress.toFixed(2)}%
              </div>
            ) : <></>}

            {error && (
              <div className="flex items-center text-red-700 dark:text-red-400">
                Error: {error}
              </div>
            )}

            <HelpfulCommands
              open={openHelpfulCommands}
              setOpen={setOpenHelpfulCommands}
              onSelectCommand={(command: string) => {
                setInstructions(command);
                setOpenHelpfulCommands(false);
              }}
            />
          </div>

          <div className="ml-auto">
            <Voice
              onResult={(result: string) => {
                const regex = new RegExp('\\bsend\\b', 'i');
                const isSend = regex.test(result)

                const newResult = isSend
                  ? result.replace(regex, '')
                  : result

                setInstructions(newResult)

                if (isSend) {
                  setIsSend(true);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructionsBox