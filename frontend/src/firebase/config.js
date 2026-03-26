// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);