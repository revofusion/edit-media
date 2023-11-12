import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { localStorage } from './store'
import { User } from 'firebase/auth'

interface AuthStore {
    user: User | null
    setUser: (user: User) => void
}

// Note setUser is auto called from flowbite wrapper
export const useAuthStore = create<AuthStore>()(
    persist((set, _) => ({
        user: null,// auth.currentUser,
        setUser: (user: User) => {
            set({ user })
        }
    }),
    {
        name: 'auth-storage',
        storage: localStorage,
        version: 1,
        partialize: (state) => ({
            user: state.user
        })
    }
  )
)