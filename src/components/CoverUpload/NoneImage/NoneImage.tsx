import React, { Fragment } from 'react'
import Image from '@/assets/icons/Image.svg'

export interface NoneImageInterface { }

const NoneImage: React.FC<NoneImageInterface> = () => {
	return (
		<Fragment>
			<img className='mb-3 w-20 h-20 opacity-40' src={Image} alt="" />
		</Fragment>
	)
}

export default NoneImage;

