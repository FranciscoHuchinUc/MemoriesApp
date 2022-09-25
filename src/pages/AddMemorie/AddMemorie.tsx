import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import Layout from '../_layout'
import { createMemorie } from '@/lib/firestore/db'
import { ImagePreview, NoneImage } from '@/components/CoverUpload'

export interface AddMemorieInterface { }

const AddMemorie: React.FC<AddMemorieInterface> = () => {
	const [selectedImage, setSelectedImage] = useState(null)

	const handleImageChange = (e: any) => {
		if (e.target.files[0])
		{
			setSelectedImage(e.target.files[0])
		}
	}

	return (
		<Layout>
			<Formik
				initialValues={{
					title: '',
					description: '',
					createAt: '',
				}}
				onSubmit={async (values) => {
					console.log(values)
					await createMemorie(values)
						.then((res) => {
							console.log('Memorie created', res)
						})
						.catch((err) => {
							console.log('Error creating Memorie', err)
						})
				}}
			>
				{({ handleChange }) => (
					<Form>
						<div className='flex flex-col gap-5'>

							<div className="flex items-center justify-center w-full h-64 border rounded-md">
								{
									selectedImage ? (
										<ImagePreview image={selectedImage} />
									) : (
										<NoneImage />
									)
								}
							</div>

							<input
								className='text-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold
								file:bg-violet-50 file:text-primary hover:file:bg-violet-100'
								type="file" name="image" onChange={handleImageChange} accept='image/*' />

							<input className='border-2 rounded-md' type="text" name="title" onChange={handleChange} />

							<textarea className='border-2 rounded-md' rows={3} name="description" onChange={handleChange} />

							<input className='border-2 rounded-md' type="date" name="createAt" onChange={handleChange} />

							<button className='bg-primary p-2 rounded-md text-white' type='submit'>Create</button>
						</div>
					</Form>
				)}
			</Formik>
		</Layout>
	)
}

export default AddMemorie

