import React, { useState } from 'react'
import { GoAlertFill, GoX } from 'react-icons/go'
import { motion } from 'framer-motion'
import Axios from '../../api/index'
import { toast } from 'react-toastify'
const Index = ({ postID, isVisibleModalDelete, setIsVisibleModalDelete }) => {

	const handleDeletePost = async () => {
		try {
			const response = await Axios.delete(`/api/v1/posts/${postID}`);
			if (response.status === 200) {
				toast.success("Delete success");
				console.log(response);
				setIsVisibleModalDelete(false)
			}
		} catch (err) {
			if (err.response) {
				toast.error(err.response.data.message);
				console.log(err.response);
				setIsVisibleModalDelete(false)
			} else {
				toast.error("An error occurred while deleting the post.");
				console.error(err);
			}
		}
	};


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
					},
				}}
				exit={{
					top: "-10%",
					opacity: 0,
					transition: {
						duration: 0.25,
					},
				}}
				className='fixed top-5 left-0 right-0 m-auto bg-white w-1/4 shadow-md rounded-md z-20'>
				<div className="p-5">
					<div className="flex flex-col items-center">
						<GoAlertFill size={60} className='text-red-600 mb-3' />
						<p className='font-medium text-center'>Are you sure you want to delete this post?</p>
						<p className='text-sm'>This action cannot be undone</p>
					</div>
					<div
						className="flex w-full justify-between items-center gap-2 mt-5">
						<button
							type='button'
							onClick={() => setIsVisibleModalDelete(false)}
							className='w-full p-2 bg-gray-400 rounded-md text-white'>
							Cancel
						</button>
						<button
							type='button'
							onClick={handleDeletePost}
							className='w-full p-2 bg-red-600 rounded-md text-white hover:bg-red-500 transition-all'>
							Delete
						</button>
					</div>
				</div>
				<GoX className='absolute top-2 right-2 cursor-pointer' size={22} onClick={() => setIsVisibleModalDelete(false)} />
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
				exit={{
					opacity: 0,
					transition: {
						duration: 0.2
					}
				}}
				onClick={() => setIsVisibleModalDelete(false)}
				className="fixed top-0 left-0 w-screen h-screen bg-black/30 z-10"></motion.div>
		</>
	)
}

export default Index