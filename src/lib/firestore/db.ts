import {db} from './config'
import {collection, addDoc, Firestore, getDocs} from 'firebase/firestore'
import {Memorie} from '@/interfaces/interfaces'

export const createMemorie = async (memorie: Memorie) =>
	await addDoc(collection(db, 'memories'), memorie)

export const getMemories = async () => {
	const memoriesCol = collection(db, 'memories')
	const memorySnapshot = await getDocs(memoriesCol)

	const memoryList = memorySnapshot.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
		}
	})
	return memoryList
}
