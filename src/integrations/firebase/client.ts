// src/integrations/firebase/client.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW_OXHIYwfe7rYSke3c0S2R-kwpbZ_CQA",
  authDomain: "fotoslopes-54480.firebaseapp.com",
  projectId: "fotoslopes-54480",
  storageBucket: "gs://fotoslopes-54480.firebasestorage.app",
  messagingSenderId: "262035064532",
  appId: "1:262035064532:web:c32278e8d48be73db79d41"
};

// Initialize Firebase only once
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
