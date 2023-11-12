// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider } from "firebase/auth";
import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
import type { AiVideoRequest, AiVideoResponse } from '../../../firebase/src/ai.types'

const firebaseConfig = {
  apiKey: "AIzaSyBL9dJUDH4kbx0_7zWtwpdWC7auSxRDUsI",
  authDomain: "editmedia-8048a.firebaseapp.com",
  projectId: "editmedia-8048a",
  storageBucket: "editmedia-8048a.appspot.com",
  messagingSenderId: "725182073157",
  appId: "1:725182073157:web:03dcba6a417e70982b162c",
  measurementId: "G-N7MK3FN1NW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
export const googleProvider = new GoogleAuthProvider()
export const functions = getFunctions(app)

if (import.meta.env.VITE_DEV) {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}

export const apiAudioVideo = httpsCallable<AiVideoRequest, AiVideoResponse>(functions, 'audioVideo');
