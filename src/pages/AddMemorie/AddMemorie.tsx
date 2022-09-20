import React, { SyntheticEvent } from 'react'
import { Formik, Form } from 'formik'
import Layout from '../_layout'
import { createMemorie } from '@/lib/firestore/db'
import UploadIcon from '@/assets/icons/Upload.svg'

export interface AddMemorieInterface { }

const AddMemorie: React.FC<AddMemorieInterface> = () => {
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
						<div className='flex flex-col gap-10'>
							<div className="flex justify-center items-center w-full">
								<label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer">
									<div className="flex flex-col justify-center items-center pt-5 pb-6">
										<img className='mb-3 w-10 h-10 opacity-40' src={UploadIcon} alt="" />
										<p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
										<p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
									</div>
									<input id="dropzone-file" type="file" className="hidden" />
								</label>
							</div>

							<input className='border-2 rounded-md' type="text" name="title" onChange={handleChange} />
							<input className='border-2 rounded-md' type="text" name="description" onChange={handleChange} />
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

