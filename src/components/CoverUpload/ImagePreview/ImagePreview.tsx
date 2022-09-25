import React, { Fragment } from 'react'


export interface ImagePreviewInterface {
	image: Blob | MediaSource
}

const ImagePreview: React.FC<ImagePreviewInterface> = ({ image }) => {
	return (
		<Fragment>
			<div className='flex items-center justify-center w-full h-64 overflow-hidden'>
				<img className='object-cover' src={URL.createObjectURL(image)} alt="" />
			</div>
		</Fragment>
	)
}

export default ImagePreview;

