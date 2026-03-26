import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// ❌ Remove analytics (not needed for now)

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyDITdyCEIRbP2FRf-x3wOKBdAJcRwi5D6I",
  authDomain: "food-app-e5c3f.firebaseapp.com",
  projectId: "food-app-e5c3f",
  storageBucket: "food-app-e5c3f.firebasestorage.app",
  messagingSenderId: "47035031484",
  appId: "1:47035031484:web:56c5320ae3a5903092d5b9",
  measurementId: "G-WFPEV0VDL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 THIS WAS MISSING
export const db = getFirestore(app);