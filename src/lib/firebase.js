import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.env.VITE_API_KEY,
  authDomain: "chat-firebase-9ca39.firebaseapp.com",
  projectId: "chat-firebase-9ca39",
  storageBucket: "chat-firebase-9ca39.appspot.com",
  messagingSenderId: "310011106307",
  appId: "1:310011106307:web:bb1afad7fd9a3491856a36",
  measurementId: "G-RJDZ3N1J40"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();