import React, { useCallback, useState } from 'react'
import { GoAlertFill, GoX } from 'react-icons/go'
import { motion } from 'framer-motion'
import Axios from '../../api/index'
import { usePostContext } from '../../hooks/usePostContext'
import { ImSpinner9 } from 'react-icons/im'
const CancelOrderModal = ({ postID, setDetailPost, setIsVisibleModalCancel }) => {

	const [state, dispatch] = usePostContext()
	const [isLoading, setIsLoading] = useState(false)
	const confirmAction = useCallback(async (status) => {
		const data = {
			status: status
		}
		try {
			dispatch({ type: "CANCEL_ORDER", value: true })
			setIsLoading(true)
			const res = await Axios.patch(`/api/v1/posts/${postID}/status`, data)
			if (res.status === 200) {
				console.log(res)
				setDetailPost(res.data.data.data)
				setIsLoading(false)
				setIsVisibleModalCancel(false)
				dispatch({ type: "CANCEL_ORDER", value: false })
			}
		} catch (err) {
			setIsLoading(false)
			setIsVisibleModalCancel(false)
			setTimeout(() => {
				dispatch({ type: "CANCEL_ORDER", value: false })
			}, 2000);
			console.log(err)
		}
	}, [state])
	return (
		<>
			<motion.div
				initial={{
					top: "-10%",
					opacity: 0
				}}
				animate={{
					top: "20px",
					opacity: 1,
					transition: {
						duration: 0.25,
						type: "spring"
					},
				}}
				className='fixed top-5 left-0 right-0 m-auto bg-white w-1/4 shadow-md rounded-md z-20'>
				{
					isLoading === false ? (
						<>
							<div className="p-5">
								<div className="flex flex-col items-center">
									<GoAlertFill size={60} className='text-red-600 mb-3' />
									<p className='font-medium text-center'>Are you sure you want to cancel this order?</p>
									<p className='text-sm'>This action cannot be undone</p>
								</div>
								<div
									className="flex w-full justify-between items-center gap-2 mt-5">
									<button
										type='button'
										onClick={() => setIsVisibleModalCancel(false)}
										className='w-full p-2 bg-gray-400 rounded-md text-white'>
										Cancel
									</button>
									<button
										type='submit'
										onClick={() => confirmAction("Unconfirmed")}
										className='w-full p-2 bg-red-600 rounded-md text-white hover:bg-red-500 transition-all'>
										Submit
									</button>
								</div>
							</div>
							<GoX className='absolute top-2 right-2 cursor-pointer' size={22} onClick={() => setIsVisibleModalCancel(false)} />
						</>
					) : (
						<div className="w-full h-fit py-20 flex justify-center items-center rounded-md bg-white">
							<ImSpinner9 size={25} className='animate-spin transition-all duration-500 text-primary-main' />
						</div>
					)
				}
			</motion.div>
			<motion.div
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1,
					transition: {
						duration: 0.2
					}
				}}
				onClick={() => setIsVisibleModalCancel(false)}
				className="fixed top-0 left-0 w-screen h-screen bg-black/30 z-10"></motion.div>
		</>
	)
}

export default CancelOrderModal