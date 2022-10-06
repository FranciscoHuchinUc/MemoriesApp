import './index.css'
import React, { useState } from 'react'
import { Heart, Plus, Image } from 'react-iconly'
import { Item } from './Item'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
	const items = [
		{ name: 'Home', icon: <Heart set='curved' />, to: '/home' },
		{ name: '', icon: <Plus set='curved' size={'large'} />, to: '/add' },
		{ name: 'Memories', icon: <Image set='curved' />, to: '/memories' },
	]

	const [active, setActive] = useState<Number>(0)

	return (
		<nav className='w-full h-[60px] px-[10px] fixed bottom-0 left-0'>
			<ul className='max-w-[530px] m-auto flex flex-row justify-evenly items-center py-1 rounded-lg bg-white border border-stroke'>
				{items.map(({ to, name, icon }) => (
					<li key={name}>
						<Item to={to} name={name} icon={icon} />
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
