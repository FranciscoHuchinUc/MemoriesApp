import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'memoriesapp-f4aa3.firebaseapp.com',
	projectId: 'memoriesapp-f4aa3',
	storageBucket: 'memoriesapp-f4aa3.appspot.com',
	messagingSenderId: '783327740184',
	appId: '1:783327740184:web:831471fb99a56a75f65e6d',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
