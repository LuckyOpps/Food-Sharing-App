import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDITdyCEIRbP2FRf-x3wOKBdAJcRwi5D6I",
  authDomain: "food-app-e5c3f.firebaseapp.com",
  projectId: "food-app-e5c3f",
  storageBucket: "food-app-e5c3f.appspot.com",
  messagingSenderId: "47035031484",
  appId: "1:47035031484:web:9767ad94b1556c1c92d5b9"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT THIS (IMPORTANT)
export default app;