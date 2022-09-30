import React, { useState } from 'react'
import { Heart, Plus, Image } from "react-iconly"
import { Link } from 'react-router-dom'
import { Item } from './Item'

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
	const items = [
		{ name: 'Home', icon: <Heart set='curved' />, to: '/home' },
		{ name: '', icon: <Plus set='curved' size={'large'} />, to: '/add' },
		{ name: 'Memories', icon: <Image set='curved' />, to: '/memories' },
	]

	const [active, setActive] = useState<Number>(0)

	return (
		<nav className='w-full h-[60px] px-[10px]  fixed bottom-0 left-0'>
			<ul className='flex flex-row justify-evenly items-center py-1 rounded-lg bg-white border border-stroke'>
				{
					items.map((item, i) => (
						<li key={i}>
							<Link to={item.to} onClick={() => setActive(i)}>
								<Item name={item.name} icon={item.icon} item={i} active={active} />
							</Link>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default Navbar

