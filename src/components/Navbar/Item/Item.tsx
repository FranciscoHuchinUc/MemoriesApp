import React from 'react'
import { Link } from 'react-router-dom'

export interface ItemInterface {
	to: string
	icon: string
	text?: string
}

const Item: React.FC<ItemInterface> = ({to, icon, text}) => {
	return (
		<Link to={to} className='group'>
			<li className='flex flex-col justify-center items-center px-[6px] group-hover:text-primary'>
					<img className='' src={icon} alt="" />
				{ text && <span className='text-xs text-black font-medium group-hover:text-primary'>{text}</span>}
			</li>
		</Link>
	)
}

export default Item

