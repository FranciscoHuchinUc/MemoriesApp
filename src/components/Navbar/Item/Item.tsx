import React from 'react'
import { Link } from 'react-router-dom'

export interface ItemInterface {
	name?: string
	icon: JSX.Element
	item: Number
	active: Number
}

const Item: React.FC<ItemInterface> = ({ icon, name, item, active }) => {

	return (
		<div className={`flex flex-col justify-center items-center rounded-md h-10 w-20 `}>
			<div className={`h-8 w-8  ${active === item ? 'text-primary' : 'text-black'}`}>
				{icon}
			</div>
			<span className={`text-xs -mt-1 ${active === item ? 'text-primary' : 'text-black'} font-medium`}>
				{name}
			</span>
		</div>
	)
}

export default Item

