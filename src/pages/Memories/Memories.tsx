import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../_layout'
import { getMemories } from '@/lib/firestore/db'
import { DocumentData } from 'firebase/firestore'
import { Memorie } from '@/interfaces/interfaces'
import { Card, Lazy } from '@/components'

export interface MemoriesInterface { }

const Memories: React.FC<MemoriesInterface> = () => {
	const [memories, setMemories] = useState<DocumentData>([])
	const [lazy, setLazy] = useState<Boolean>(true)

	useEffect(() => {
		getMemories().then((data) => {
			setMemories(data)
			memories && setLazy(false)
		})
	}, [])

	return (
		<Layout>
			<section className='flex justify-center items-center flex-col gap-4'>
				{
					!lazy ? (
						memories.map((memory: Memorie) => (
							<Card key={memory.id} memory={memory} />
						))
					) : (<Lazy />)
				}
			</section>
		</Layout>
	)
}

export default Memories

