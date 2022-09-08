import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBj2Y_uU0ZYTeNEjYDgch8xxj4oC5c-4uQ",
  authDomain: "weather-forecast-3bc0d.firebaseapp.com",
  projectId: "weather-forecast-3bc0d",
  storageBucket: "weather-forecast-3bc0d.appspot.com",
  messagingSenderId: "809298047167",
  appId: "1:809298047167:web:e3bd87e38dcb653d7d160a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }