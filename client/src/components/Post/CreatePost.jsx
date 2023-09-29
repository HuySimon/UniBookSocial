import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { SiPhotobucket } from 'react-icons/si'
import { Portrait } from '../../assets'
import { FiUpload } from 'react-icons/fi'
const CreatePost = ({ isVisiblePost, handleCreatePost, setActiveOverlay }) => {

	return (
		<>
			<motion.div
				initial={{
					scale: 0,
					opacity: 0
				}}
				animate={{
					scale: 1,
					opacity: 1,
					transition: {
						duration: 0.3,
						ease: [0.12, 0, 0.39, 0],
						type: "spring"
					}
				}}
				exit={{
					scale: 0,
					opacity: 0,
					transition: {
						duration: 0.15,
						ease: [0.12, 0, 0.39, 0],
						type: "spring"
					}
				}}
				className='fixed inset-0 m-auto w-[600px] h-fit max-h-screen bg-white z-10 rounded-lg overflow-hidden'>
				<div className="w-full h-full flex flex-col">
					<p className='text-base text-center font-semibold py-2 border-b'>Create new post</p>
					<form className="flex flex-col" method='POST' action='#'>
						<div className="p-4">
							<div className="flex">
								<div className="w-12 h-12 rounded-full overflow-hidden mr-3">
									<img src={Portrait} alt="" className='w-full h-full object-cover' />
								</div>
								<span>John Doe</span>
							</div>
							<div className="w-full flex justify-between items-center gap-5 mt-4">
								<div className="w-full flex flex-col">
									<span className='block mb-2 text-gray-400'>Core Image:</span>
									<div class="flex items-center justify-center w-full">
										<label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
											<div class="flex flex-col items-center justify-center pt-5 pb-6">
												<FiUpload size={45} className='text-[#6e6d74] p-3 mb-2 bg-[#F8F8F8] rounded-lg' />
												<p class="mb-2 text-sm text-primary-500 font-medium "><span class="font-medium !text-black">Drag & drop files or</span> browse files</p>
												<p class="text-xs text-gray-500 ">JPG, PNG or GIF - Max file size 2MB</p>
											</div>
											<input id="dropzone-file" type="file" class="hidden" />
										</label>
									</div>
								</div>
								<div className="w-full flex flex-col">
									<span className='block mb-2 text-gray-400'>Sub Image:</span>
									<div class="flex items-center justify-center w-full">
										<label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
											<div class="flex flex-col items-center justify-center pt-5 pb-6">
												<FiUpload size={45} className='text-[#6e6d74] p-3 mb-2 bg-[#F8F8F8] rounded-lg' />
												<p class="mb-2 text-sm text-primary-500 font-medium "><span class="font-medium !text-black">Drag & drop files or</span> browse files</p>
												<p class="text-xs text-gray-500 ">JPG, PNG or GIF - Max file size 2MB</p>
											</div>
											<input id="dropzone-file" type="file" class="hidden" />
										</label>
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center gap-5 mt-3 h-fit">
								<div className="w-full flex flex-col mb-3">
									<label htmlFor="email" className='mb-1 text-gray-400'>Name:</label>
									<input type="text" name="first-name" id="first-name"
										className='border border-gray-400 rounded-md placeholder:text-sm text-black px-4 py-2 w-full' placeholder='John Doe' />
								</div>
								<div className="w-full flex flex-col mb-3">
									<label htmlFor="email" className='mb-1 text-gray-400'>Price:</label>
									<input type="text" name="last-name" id="last-name"
										className='border border-gray-400 rounded-md placeholder:text-sm text-black px-4 py-2 w-full' placeholder='15000' />
								</div>
							</div>
							<div className="flex justify-between items-center gap-5">
								<div className="w-full flex flex-col mb-3">
									<label htmlFor="email" className='mb-1 text-gray-400'>Major:</label>
									<select name="major" id="" placeholder='' className='border border-gray-400 px-4 py-2 w-full rounded-md text-sm'>
										<option disabled selected className=''>Select Major</option>
										<option value="none">None</option>
										<option value="none">Information Technology</option>
									</select>
								</div>
								<div className="w-full flex flex-col mb-3">
									<label htmlFor="email" className='mb-1 text-gray-400'>Type:</label>
									<select name="type" id="type" className='border border-gray-400 px-4 py-2 w-full rounded-md text-sm'>
										<option disabled selected className=''>Select Type</option>
										<option value="new">New</option>
										<option value="old">Old</option>
									</select>
								</div>
							</div>
							<div className="flex flex-col ">
								<label htmlFor="description" className='mb-1 text-gray-400'>Description</label>
								<textarea name="" id="" cols="20" rows="4" placeholder='Type something' className='px-4 py-2 border border-gray-400 rounded-md'></textarea>
							</div>
						</div>
						<div className="px-4 py-2 mb-2">
							<button className={`w-full p-2 bg-primary-900 text-center rounded-lg text-white`}>
								Publish
							</button>
						</div>
					</form>
				</div>
			</motion.div>
			<div
				onClick={() => {
					handleCreatePost()
					setActiveOverlay(0)
				}}
				className="fixed w-full h-screen bg-black/50">
			</div>
			<AiOutlineClose
				onClick={() => {
					handleCreatePost()
					setActiveOverlay(0)
				}}
				size={22}
				className='fixed top-4 right-4 text-white cursor-pointer hover:rotate-[360deg] transition-all duration-300' />
		</>
	)
}

export default CreatePost
