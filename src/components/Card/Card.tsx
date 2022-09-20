import { Memorie } from '@/interfaces/interfaces'
import React, { Fragment } from 'react'


export interface CardInterface {
	memory: Memorie
}

const Card: React.FC<CardInterface> = ({ memory }) => {
	return (
		<Fragment>
			<section className='bg-white border rounded-md w-[340px] h-[240px] overflow-hidden shadow-sm'>
				<header className='flex items-center w-full h-[180px] overflow-hidden'>
					<img className='object-cover' src={memory.image} alt="" />
				</header>
				<footer className='flex flex-row justify-between px-2 py-1'>
					<div className='flex flex-col justify-center items-start'>
						<h3 className='text-sm font-semibold text-primary overflow-hidden w-[240px] whitespace-nowrap text-ellipsis'>{memory.title}</h3>
						<p className='text-xs font-normal overflow-hidden w-[240px] whitespace-nowrap text-ellipsis'>{memory.description}</p>
					</div>
					<span className='h-5 text-[8px] text-center font-semibold px-2 py-1 rounded-md bg-purple-100 text-primary'>{memory.createAt}</span>
				</footer>
			</section>
		</Fragment>
	)
}

export default Card;

