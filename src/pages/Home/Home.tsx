import React, { useEffect, useState } from 'react'
import Layout from '../_layout'
import { lastMemorie } from '@/lib/firestore/db'
import { DocumentData } from 'firebase/firestore'

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	const [lasMemory, setLasMemory] = useState<DocumentData>({})

	useEffect(() => {
		lastMemorie().then((data) => {
			setLasMemory(data[0])
		})
	}, [])

	return (
		<Layout>
			<section>
				<article className='flex justify-center items-center flex-col gap-14'>
					<h1 className='pt-10 text-center text-lg font-medium'>Recent Memorie</h1>
					<div className='w-full h-[600px] rounded-md border-2 border-shadow overflow-hidden sm:w-[470px]'>
						<img
							className='w-full h-full object-cover'
							src={lasMemory.image}
							alt={lasMemory.title}
						/>
					</div>
				</article>
			</section>
		</Layout>
	)
}

export default Home
