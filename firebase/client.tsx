
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBQJ9MCt3eRAsrpFYeUNt1Wq-9tz70sRKY",
  authDomain: "smarthire-1fd35.firebaseapp.com",
  projectId: "smarthire-1fd35",
  storageBucket: "smarthire-1fd35.firebasestorage.app",
  messagingSenderId: "50212112352",
  appId: "1:50212112352:web:d4b12a99b1940a41674d85",
  measurementId: "G-7QHZH5LBXS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);