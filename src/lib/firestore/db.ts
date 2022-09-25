import { db, storage } from './config'
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { Memorie } from '@/interfaces/interfaces'
import { v4 } from 'uuid'

const memoriesRef = collection(db, 'memories')

export const createMemorie = async (memorie: Memorie) =>
	await addDoc(memoriesRef, memorie)

export const getMemories = async () => {
	let memorySnapshot = await getDocs(memoriesRef)

	let memoryList = memorySnapshot.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
		}
	})
	return memoryList
}

export const lastMemorie = async () => {
	let q = query(memoriesRef, orderBy('createAt', 'asc'), limit(1))
	let memorySnapshot = await getDocs(q)
	let last = memorySnapshot.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
		}
	})
	return last
}

export const uploadImage = async (file: any) => {
	const storageRef = ref(storage, `post/${v4()}`)
	await uploadBytes(storageRef, file)
	const url = await getDownloadURL(storageRef)
	return url
}
