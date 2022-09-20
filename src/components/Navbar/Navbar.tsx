import React from 'react'
import Heart from '@/assets/icons/Heart.svg'
import Plus from '@/assets/icons/Plus.svg'
import Image from '@/assets/icons/Image.svg'
import { Item } from './Item'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
	return (
		<nav className='w-full h-[60px] p-[10px] absolute bottom-0 left-0'>
			<ul className='flex flex-row justify-between items-center px-[30px] py-1 rounded-md bg-secondary/70 backdrop-blur-sm'>
				<Item to='/' icon={Heart} text='Home' />
				<Item to='/add' icon={Plus} />
				<Item to='/memories' icon={Image} text='Memories' />
			</ul>
		</nav>
	)
}

export default Navbar

