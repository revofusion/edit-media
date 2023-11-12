import { ReactTree } from "@naisutech/react-tree";
import { Button, Tooltip, useThemeMode } from "flowbite-react";
import { HiPhotograph, HiMusicNote, HiChevronRight, HiChevronDown, HiVideoCamera, HiChevronLeft, HiFolderOpen } from "react-icons/hi";
import { FC, useEffect, useRef, useState } from "react";
import _ from 'lodash'
import { ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { watchImmediate } from "@os/invoke/fsWatch";
import { useOpenDirectory } from "@class/hooks/useDirectory";
import { FileEntry } from "@class/types/Path";
import { path } from "@os/Path";
import isAudio from "@helpers/isAudio";
import isVideo from "@helpers/isVideo";
import { useConfigStore } from "@stores/config";

const LocalFileTree: FC<{
    minimized: boolean,
    addFile: (_: string[]) => void,
    fileTreeRef: any
}> = ({ minimized, addFile, fileTreeRef }) => {
    const [paths, setPaths] = useState([])
    const { openDirectory } = useOpenDirectory()
    const stopDirectoryWatcher = useRef(null)
    const configStore = useConfigStore()
    const [themeMode] = useThemeMode();

    useEffect(() => {
        if (!configStore.directory) {
            return
        }

        const reprocess = async () => {
            const entries = await path.readDir(configStore.directory);

            let tree = []
            function processEntries(entries: FileEntry[], parentId = null) {
                for (const entry of entries) {
                    if (entry.name[0] === '.') {
                        continue
                    }

                    const obj: any = {
                        id: entry.path,
                        parentId,
                        label: entry.name,
                        itemCount: entry.children ? entry.children.length : null
                    }
                    if (entry.children) {
                        processEntries(entry.children, entry.path)
                    }
                    tree.push(obj)
                }
            }
            processEntries(entries)
            tree = tree.sort((a, b) => {
                if (a.itemCount && !b.itemCount) {
                    return -1;
                } else if (!a.itemCount && b.itemCount) {
                    return 1;
                } else {
                    return a.label.localeCompare(b.label);
                }
            })

            setPaths(tree)
        }

        // TODO
        const runEffect = async () => {
            if (stopDirectoryWatcher.current) {
                stopDirectoryWatcher.current = await stopDirectoryWatcher.current()
            }

            try {
                await reprocess()

                console.log('watching directory', [configStore.directory])
    
                const stopWatcher = await watchImmediate(
                    [configStore.directory],
                    _.debounce(async (event) => {
                        if (Array.isArray(event)) {
                            return
                        }
    
                        const { type } = event

                        try {
                            await reprocess()
                        } catch (e) {
                            console.error(e)
                            console.error('File error')
                            configStore.setDirectory('')
                        }

                        // console.log(event.type, event.attrs)
                        if (typeof type === "object") {
                            // TODO make smarts, type contains 'create', 'remove', 'modify
                        }
                    }, 1000),
                    { recursive: true },
                )
                stopDirectoryWatcher.current = stopWatcher
            } catch (e) {
                console.error(e)
                console.error('File error')
                configStore.setDirectory('')
            }
        }

        runEffect()

        return () => {
            if (stopDirectoryWatcher.current) {
                stopDirectoryWatcher.current()
            }
        }
    }, [configStore.directory])
        
    if (minimized) {
        return (
            <div className="flex items-center bg-gray-800 text-white w-6 h-full cursor-pointer hover:bg-gray-700" onClick={() => fileTreeRef.current.expand()} style={{writingMode: 'vertical-rl', textOrientation: 'upright'}}>
                <span className="pt-3 pb-3">FILE</span>
                <span className="pb-3">EXPLORER</span>
                <HiChevronRight className="inline w-5 h-5"/>
            </div>
        )
    }

    return (
        <div className="w-full h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-y-scroll no-scrollbar">
            <div className="flex mb-2 px-4 pt-4 justify-between items-center text-base text-gray-900 rounded-lg dark:text-gray-200 group font-bold">
                <div className="flex space-x-2">
                    <span>{configStore.directoryLabel}</span>
                    <Button size="xs" className="p-0" onClick={() => openDirectory()}>
                        {!configStore.directory && (<span className="mr-1">Open Directory</span>)}
                        <HiFolderOpen />
                    </Button>
                </div>

                <button
                    onClick={() => fileTreeRef.current?.collapse()}
                    className="cursor-pointer rounded p-1 text-primary dark:text-white hover:bg-gray-600 hover:text-white lg:inline"
                >
                    <Tooltip content="Minimize File Selector">
                        <HiChevronLeft className="h-6 w-6" />
                    </Tooltip>
                </button>
            </div>

            <ReactTree
                nodes={paths}
                RenderIcon={({ node, open }) => (
                    (node as any).itemCount !== null
                        ? open
                            ? <HiChevronDown className="text-blue-900 dark:text-gray-300 ml-5" />
                            : <HiChevronRight className="text-blue-900 dark:text-gray-300 ml-5" />
                        : isAudio(node.id)
                            ? <HiMusicNote className="text-blue-900 dark:text-gray-300 ml-5" />
                            : isVideo(node.id)
                                ? <HiVideoCamera className="text-blue-900 dark:text-gray-300 ml-5" />
                                : <HiPhotograph  className="text-blue-900 dark:text-gray-300 ml-5"/>
                )}
                RenderNode={({ node }) => (
                    <div className="ml-4 mr-4 text-xs dark:text-gray-300 cursor-pointer line-clamp-2">{node.label}</div>
                )}
                containerStyles={{
                    padding: 0,
                }}
                truncateLongText={true}
                onToggleSelectedNodes={(files) => addFile(files as any)}
                multiSelect={false}
                theme={themeMode}
                messages={{
                    noData: configStore.directory ? 'No files in folder' : ' '
                }}
                themes={{
                "light": {
                    "nodes": {
                        "height": "32px",
                        "folder": {
                            // "bgColor": "rgb(31 41 55 / var(--tw-bg-opacity));",
                            "selectedBgColor": "rgb(240 240 240 / var(--tw-bg-opacity));",
                            "hoverBgColor": "rgb(240 240 240 / var(--tw-bg-opacity));"
                        },
                        "leaf": {
                            // "bgColor": "rgb(31 41 55 / var(--tw-bg-opacity));",
                            "selectedBgColor": "rgb(240 240 240 / var(--tw-bg-opacity));",
                            "hoverBgColor": "rgb(240 240 240 / var(--tw-bg-opacity));"
                        },
                    }
                },
                "dark": {
                    "nodes": {
                        "height": "2.5rem",
                        "folder": {
                            
                            "bgColor": "rgb(31 41 55 / var(--tw-bg-opacity));",
                            "selectedBgColor": "rgb(55 65 81 / var(--tw-bg-opacity));",
                            "hoverBgColor": "rgb(55 65 81 / var(--tw-bg-opacity));"
                        },
                        "leaf": {
                            "bgColor": "rgb(31 41 55 / var(--tw-bg-opacity));",
                            "selectedBgColor": "rgb(55 65 81 / var(--tw-bg-opacity));",
                            "hoverBgColor": "rgb(55 65 81 / var(--tw-bg-opacity));"
                        },
                    }
                }
                }}
            />
        </div>
    )
}


const FileTree: FC<{
    addFile: (_: string[]) => void;
    children: React.ReactNode
    title?: string
}> = function ({ addFile, children }) {
    const [minimized, setMinimized] = useState(false)
    const fileTreeRef = useRef(null as ImperativePanelHandle)

    return (
      <PanelGroup direction="horizontal" autoSaveId="commonsave">
        <Panel
            collapsible
            ref={fileTreeRef}
            defaultSize={25}
            minSize={15}
            maxSize={30}
            collapsedSize={2}
            onCollapse={(collapsed) => setMinimized(collapsed)}
        >
            <LocalFileTree
                minimized={minimized}
                addFile={addFile}
                fileTreeRef={fileTreeRef}
            />

        </Panel>
        <PanelResizeHandle className="w-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 cursor-col-resize" />

        <Panel minSize={30}>
          {children}
        </Panel>
      </PanelGroup>
    )
}

export default FileTree