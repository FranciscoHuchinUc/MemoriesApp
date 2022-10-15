import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { object, string, date } from 'yup'
import Layout from '../_layout'
import { createMemorie, uploadImage } from '@/lib/firestore/db'
import { ImagePreview, NoneImage } from '@/components/CoverUpload'
import { Toast } from '@/components/Toast'

export interface AddMemorieInterface {}

const AddMemorie: React.FC<AddMemorieInterface> = () => {
	const [selectedImage, setSelectedImage] = useState<File | null>(null)
	const [file, setFile] = useState(null)
	const [activeToast, setActiveToast] = useState<boolean>(false)
	const [toastType, setToastType] = useState<'success' | 'error'>('success')
	const [toastTitle, setToastTitle] = useState<string>('')

	const uploadScheme = object().shape({
		title: string().required('Title is required'),
		description: string().required('Description is required'),
		createAt: date().required('Date is required'),
	})

	return (
		<Layout>
			<Formik
				initialValues={{
					title: '',
					description: '',
					createAt: '',
				}}
				validationSchema={uploadScheme}
				onSubmit={async (values) => {
					console.log(values)
					const urlImage = await uploadImage(file)
					await createMemorie({
						...values,
						image: urlImage,
					})
						.then((res) => {
							setActiveToast(true)
							setToastType('success')
							setToastTitle('Memorie created')
							setTimeout(() => {
								setActiveToast(false)
							}, 1500)
						})
						.catch((err) => {
							setActiveToast(true)
							setToastType('error')
							setToastTitle('Memorie not created')
							setTimeout(() => {
								setActiveToast(false)
							}, 1500)
						})
				}}
			>
				{({ handleChange, errors, touched }) => (
					<Form>
						<div className='flex flex-col gap-5 m-auto sm:w-[470px]'>
							<div className='flex items-center justify-center w-full h-64 border rounded-md'>
								{selectedImage ? <ImagePreview image={selectedImage} /> : <NoneImage />}
							</div>

							<input
								className='text-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold
								file:bg-violet-50 file:text-primary hover:file:bg-violet-100'
								type='file'
								name='image'
								onChange={(e: any) => {
									setSelectedImage(e.target.files![0])
									setFile(e.target.files![0])
								}}
								accept='image/*'
							/>

							<input className='border-2 rounded-md px-2' type='text' name='title' placeholder='Title' onChange={handleChange} />
							{errors.title && touched.title ? <div className='text-red-500 text-base -mt-4'>{errors.title}</div> : null}

							<textarea className='border-2 rounded-md px-2' rows={3} name='description' placeholder='Description' onChange={handleChange} />
							{errors.description && touched.description ? <div className='text-red-500 text-base -mt-4'>{errors.description}</div> : null}

							<input className='border-2 rounded-md' type='date' name='createAt' onChange={handleChange} />
							{errors.createAt && touched.createAt ? <div className='text-red-500 text-base -mt-4'>{errors.createAt}</div> : null}

							<button className='bg-primary p-2 rounded-md text-white' type='submit'>
								Create
							</button>
						</div>
					</Form>
				)}
			</Formik>
			<Toast type={toastType} title={toastTitle} isActivated={activeToast} />
		</Layout>
	)
}

export default AddMemorie
