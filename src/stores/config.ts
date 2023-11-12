import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { localStorage } from './store'

interface Config {
    directory: string
    directoryLabel: string,
    setDirectory: (dir: string, label?: string) => void
}

export const useConfigStore = create<Config>()(
    persist((set, _) => ({
        directory: '',
        directoryLabel: '',
        setDirectory: (directory: string, directoryLabel: string = '') => set({ directory, directoryLabel }),
    }),
    {
        name: 'config-storage',
        storage: localStorage,
        version: 1,
        partialize: (state) => ({
            directory: state.directory,
            directoryLabel: state.directoryLabel
        })
    }
  )
)