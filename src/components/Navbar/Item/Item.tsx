import React from 'react'
import { NavLink } from 'react-router-dom'

export interface ItemInterface {
	to: string
	name?: string
	icon: JSX.Element
}

const Item: React.FC<ItemInterface> = ({ to, icon, name }) => {
	return (
		<NavLink to={to}>
			<div className='flex flex-col justify-center items-center rounded-md h-10 w-20'>
				<div className='h-8 w-8 flex justify-center'>{icon}</div>
				<span className={`text-xs -mt-1 font-medium`}>{name}</span>
			</div>
		</NavLink>
	)
}

export default Item
