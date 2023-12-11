// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8lCDYv0b6oQvbj0TbNhGLjP29l90_JBc",
  authDomain: "project-k-133ed.firebaseapp.com",
  projectId: "project-k-133ed",
  storageBucket: "project-k-133ed.appspot.com",
  messagingSenderId: "744522672645",
  appId: "1:744522672645:web:4586da2a032cc41dd9ca6c",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const auth = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
