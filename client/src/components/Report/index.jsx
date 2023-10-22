import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Axios from '../../api/index'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { ReportSchema } from '../../validations/ReportValidation'
import { ImSpinner9 } from 'react-icons/im'
const Index = ({ post, setIsVisibleReport }) => {
	const [isLoading, setIsLoading] = useState(false)
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			content: ''
		},
		resolver: yupResolver(ReportSchema)
	})
	const onSubmit = async (data) => {
		setIsLoading(true)
		const fd = new FormData()
		fd.append('post', post.id)
		fd.append('content', data.content)
		// try {
		// 	const res = await Axios.post('/api/v1/reports', fd)
		// 	if (res.status === 200) {
		// 		toast.success('Report Success')
		// 		setIsLoading(false)
		// 		setIsVisibleReport(false)
		// 	}
		// } catch (err) {
		// 	console.log(err)
		// 	setIsLoading(false)
		// 	setIsVisibleReport(false)
		// }
	}
	return (
		<>
			<motion.div
				initial={{
					y: "10%",
					opacity: 0
				}}
				animate={{
					y: 0,
					opacity: 1,
					transition: {
						duration: 0.3,
					}
				}}
				className="w-[50vh] h-[50vh] fixed inset-0 m-auto z-[11]">
				<div className='flex flex-col bg-white rounded-md'>

					<p className="text-base text-center font-semibold py-2 border-b">Report</p>
					{
						isLoading && (
							<div className="w-full h-[286px] fixed top-[41px] bg-white/70 rounded-b-md">
								<ImSpinner9 size={40} className='animate-spin text-primary-main mx-auto h-full' />
							</div>
						)
					}
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='mt-2 p-3'
					>
						<textarea
							{...register("content")}
							placeholder='Write down the reason you report'
							className='border border-gray-300 p-2 rounded-md w-full h-[20vh] text-sm'></textarea>
						<p className='text-red-500 text-sm'>{errors.content?.message}</p>
						<button
							type="submit" className='w-full h-fit p-2 mt-4 bg-primary-main text-white rounded-md font-medium'>Submit</button>
					</form>
				</div>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1,
					transition: {
						duration: 0.25,
					}
				}}
				onClick={() => { setIsVisibleReport(false) }}
				className="w-screen h-screen bg-black/50 fixed inset-0 m-auto z-10"></motion.div>
		</>
	)
}

export default Index