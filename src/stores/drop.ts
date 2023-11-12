import { create } from 'zustand'
import { Media } from '@class/Media'
import { path } from '@os/Path'

interface Drop {
    hover: boolean
    advancedInputs: Media[]
    loadingFile: boolean
    setHover: (hover: boolean) => void
    setLoadingFile: (loadingFile: boolean) => void
    addFiles: (ids: string[], location: string) => Promise<void>
    addFilesWeb: (ids: File[], location: string) => Promise<void>
}

export const useDropStore = create<Drop>()(
    (set, get) => ({
        hover: false,
        advancedInputs: [],
        loadingFile: false,
        setHover: (hover: boolean) => set({ hover }),
        setLoadingFile: (loadingFile: boolean) => set({ loadingFile }),
        addFiles: async (ids: string[], location: string) => {
            if (!['/', '/chat'].includes(location)) {
                return
            }

            if (!ids || !ids.length || get().advancedInputs.find(_ => _.path === ids[0])) {
                return
            }

            try {
                set({ loadingFile: true })

                const isDirectory = await path.isDir(ids[0])
                if (isDirectory) {
                    return
                }

                const input = await Media.fromPathWithMetadata(ids[0])
                set({ advancedInputs: [input] })
            } catch (e) {
                console.error(e)
            } finally {
                set({ loadingFile: false })
            }
        },

        addFilesWeb: async (ids: File[], location: string) => {
            if (!['/', '/chat'].includes(location)) {
                return
            }

            if (!ids || !ids.length || get().advancedInputs.find(_ => _.name === ids[0].name)) {
                return
            }

            // const configStore = useConfigStore.getState()

            try {
                set({ loadingFile: true })
                const input = await Media.fromFile(ids[0])
                set({ advancedInputs: [input] })
            } catch (e) {
                console.error(e)
            } finally {
                set({ loadingFile: false })
            }
        },
    }),
)