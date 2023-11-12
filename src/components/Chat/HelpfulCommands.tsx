import { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { FolderIcon, PhotoIcon, VideoCameraIcon, MusicalNoteIcon } from '@heroicons/react/24/outline'

const quickActions = [
  { name: 'Extract small clip', command: 'Extract 5 second clip starting at 10 seconds in', icon: VideoCameraIcon,  url: '#' },
  { name: 'Convert to GIF', command: 'Convert to gif',icon: PhotoIcon, url: '#' },
  { name: 'Convert to MP4', command: 'Convert to mp4', icon: VideoCameraIcon, url: '#' },
  { name: 'Extract Audio', command: 'Split into mp3 audio and video with no audio', icon: MusicalNoteIcon,  url: '#' },
  { name: 'Increase Volume', command: 'Increase volume by 2x', icon: MusicalNoteIcon,  url: '#' },
  { name: 'Change resolution of video', command: 'Change resolution of video to 1280x720', icon: VideoCameraIcon,  url: '#' },
  { name: 'Extract images from video', command: 'Extract 1 image per second from video', icon: PhotoIcon,  url: '#' },
  { name: 'Split media into multiple files', command: 'Split into 3 equal length files', icon: VideoCameraIcon,  url: '#' },
  { name: 'Merge multiple files', command: 'Merge these together', icon: VideoCameraIcon,  url: '#' },
  { name: 'Add Text to video', command: 'Print Edit Media in white text onto center of video, with black background box of 50% opacity. The text should fade away after 3 seconds.', icon: VideoCameraIcon,  url: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HelpfulCommands({ open, setOpen, onSelectCommand }) {
    const [query, setQuery] = useState('')

    const filteredActions =
        query === ''
        ? quickActions
        : quickActions.filter((action) => {
            return action.name.toLowerCase().includes(query.toLowerCase())
        })

    return (
        <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <div className="flex flex-col justify-center fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all">
                        <Combobox onChange={(item: any) => (window.location = item.url)}>
                            <div className="relative">
                                <MagnifyingGlassIcon
                                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-900 text-opacity-40"
                                    aria-hidden="true"
                                />
                                <Combobox.Input
                                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 focus:ring-0 sm:text-sm"
                                    placeholder="Search..."
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                            </div>

                            <Combobox.Options
                                static
                                className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto"
                            >
                                <li className="w-96 p-2">
                                    <ul className="text-sm text-gray-700">
                                        {filteredActions.map((action) => (
                                            <Combobox.Option
                                                key={action.command}
                                                value={action}
                                                className={({ active }) =>
                                                    classNames(
                                                        'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                                        active && 'bg-gray-900 bg-opacity-5 text-gray-900'
                                                    )
                                                }
                                                onClick={() => onSelectCommand(action.command)}
                                            >
                                                {({ active }) => (
                                                <>
                                                    <action.icon
                                                        className={classNames(
                                                            'h-6 w-6 flex-none text-gray-900 text-opacity-40',
                                                            active && 'text-opacity-100'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-3 flex-auto truncate">{action.name}</span>
                                                    <span className="ml-3 flex-none text-xs font-semibold text-gray-500">
                                                    </span>
                                                </>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </ul>
                                </li>
                            </Combobox.Options>

                            {query !== '' && filteredActions.length === 0 && (
                                <div className="px-6 py-14 text-center sm:px-14">
                                    <FolderIcon className="mx-auto h-6 w-6 text-gray-900 text-opacity-40" aria-hidden="true" />
                                    <p className="mt-4 text-sm text-gray-900">
                                    We couldn't find any commands with <br/>
                                    that search. Please try again.
                                    </p>
                                </div>
                            )}
                        </Combobox>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
