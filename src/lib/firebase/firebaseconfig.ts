import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "progression-2d140.firebaseapp.com",
  projectId: "progression-2d140",
  storageBucket: "progression-2d140.firebasestorage.app",
  messagingSenderId: "66462119481",
  appId: "1:66462119481:web:1676a7cc0573adc06bffe8",
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);
