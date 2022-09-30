import { Memorie } from '@/interfaces/interfaces'
import React, { Fragment } from 'react'


export interface CardInterface {
	memory: Memorie
}

const Card: React.FC<CardInterface> = ({ memory }) => {
	return (
		<Fragment>
			<article className='bg-white border border-stroke rounded-md w-full h-[410px] overflow-hidden sm:w-[470px]'>
				<header className='flex items-center w-full h-[300px] overflow-hidden'>
					<img className='object-cover w-full h-full' src={memory.image} alt="" />
				</header>
				<footer className='flex flex-col justify-center items-start p-2 overflow-hidden h-[110px]'>
					<h3 className='text-sm font-semibold overflow-hidden whitespace-nowrap text-ellipsis'>{memory.title}</h3>
					<p className='text-xs font-normal overflow-hidden whitespace-nowrap text-ellipsis'>{memory.description}</p>
					<span className='text-[10px] text-[#8E8E8E] text-center font-light mt-4'>{memory.createAt}</span>
				</footer>
			</article>
		</Fragment>
	)
}

export default Card;

