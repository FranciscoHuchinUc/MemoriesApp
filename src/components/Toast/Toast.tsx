import React, { Fragment, useEffect, useState } from 'react'

export interface ToastInterface {
	type: 'success' | 'error'
	title: string
	isActivated: boolean
}

const Toast: React.FC<ToastInterface> = ({ title, type, isActivated }) => {
	const [animation, setAnimation] = useState('-bottom-40')

	function copyClipboart() {
		setAnimation('bottom-4')
		setTimeout(() => {
			setAnimation('-bottom-40')
		}, 1500)
	}

	useEffect(() => {
		if (isActivated) {
			copyClipboart()
		}
	}, [isActivated])

	return (
		<Fragment>
			<div
				className={`bg-white py-4 px-6 max-w-md border-l-4 ${
					type == 'success' ? 'border-green-600' : 'border-red-600'
				} rounded-lg flex items-center gap-3 shadow-lg fixed transition-all ${animation}`}
			>
				<div>
					<h3 className='font-semibold text-xs sm:text-base'>{title}</h3>
				</div>
			</div>
		</Fragment>
	)
}

export default Toast
