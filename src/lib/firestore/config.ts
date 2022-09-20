// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHCnyJggMehhaC94YsR0gI8FHvRVjAmsk",
  authDomain: "memoriesapp-f4aa3.firebaseapp.com",
  projectId: "memoriesapp-f4aa3",
  storageBucket: "memoriesapp-f4aa3.appspot.com",
  messagingSenderId: "783327740184",
  appId: "1:783327740184:web:831471fb99a56a75f65e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
