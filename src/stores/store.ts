// import { Store } from 'tauri-plugin-store-api'

import { createJSONStorage } from "zustand/middleware";

// export const store = new Store('edit-media.settings.dat')

// export const storage = {
//     getItem: async (name: string): Promise<string> => store.get(name),
//     setItem: async (name: string, value: string): Promise<void> => store.set(name, value),
//     removeItem: async (name: string): Promise<void> => { await store.delete(name) }
// }

export const localStorage = createJSONStorage(() => localStorage)