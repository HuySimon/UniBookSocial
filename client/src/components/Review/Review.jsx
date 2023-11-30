import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineStar } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Axios from '../../api/index'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import StarRating from '../RatingStar/RatingStar'
import { useReviewContext } from '../../hooks/useReviewContext'
import { ImSpinner9 } from 'react-icons/im'
import { yupResolver } from '@hookform/resolvers/yup';
import { addReviewSchema } from '../../validations/ReviewValidation'
const Review = ({ isVisibleReviewForm, setIsVisibleReviewForm, id }) => {
	const [rating, setRating] = useState(0)
	const [state, dispatch] = useReviewContext()
	const [isLoading, setIsLoading] = useState(false)
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			numStars: 0,
			content: ""
		},
		mode: "onChange",
		resolver: yupResolver(addReviewSchema)
	})
	const handleRating = (rate) => {
		setRating(rate)
	}
	const onSubmit = async (data) => {
		if (rating === 0) {
			toast.error("Please rate the star!")
		} else {
			try {
				const dataSend = {
					numStars: rating,
					content: data.content,
					post: id
				}
				setIsLoading(true)
				setTimeout(() => {
					dispatch({ type: "ADD_REVIEW", value: true })
				}, 1000);
				const res = await Axios.post(`/api/v1/reviews`, dataSend)
				if (res.status === 201) {
					toast.success("Thank you for your review !")
					setIsLoading(false)
					setIsVisibleReviewForm(false)
					setTimeout(() => {
						dispatch({ type: "ADD_REVIEW", value: false })
					}, 1000);
				}
			} catch (err) {
				setIsLoading(false)
				setTimeout(() => {
					dispatch({ type: "ADD_REVIEW", value: false })
				}, 1000);
				toast.error(err.response.message)
				console.log(err)
			}
		}
	}
	return (
		<>
			<motion.div
				initial={{
					scaleY: 0,
				}}
				animate={{
					scaleY: 1,
					transition: {
						duration: 0.2,
						ease: "easeIn",
						type: "spring"
					}
				}}
				className='fixed inset-0 m-auto bg-white w-[50vh] h-fit shadow-lg rounded-md z-[100]'>
				{
					isLoading ? (
						<div className="w-full h-full py-32 flex justify-center items-center">
							<ImSpinner9 size={22} className='animate-spin duration-700 transition-all text-primary-main' />
						</div>
					) : (
						<div className="w-full flex flex-col p-4">
							<div className="flex justify-between items-center mb-3">
								<p className='text-3xl font-medium'>Order Delivered</p>
								<AiOutlineClose size={22} onClick={() => { setIsVisibleReviewForm(false) }} className='cursor-pointer' />
							</div >
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="w-full">
								<div className="p-3 border border-gray-400 rounded-sm relative">
									<div className="w-full flex gap-4 items-center mb-2">
										<span className='text-lg'>Rate the product</span>
										<StarRating totalStars={5} initialRating={rating} onRatingChange={handleRating} />
									</div>
									<span className='w-full inline-block border-b border-gray-400 text-lg pb-2'>Description</span>
									<textarea {...register("content", {
										required: true,
										maxLength: 150
									})} className='w-full h-[200px] focus:outline-none p-2 resize-none' placeholder='Share your thoughs on the product'></textarea>
									<p className='text-red-400 text-sm'>{errors.content?.message}</p>
								</div>
								<div className="flex gap-2 justify-end mt-3">
									<button type="button"
										onClick={() => { setIsVisibleReviewForm(false) }}
										className='w-28 px-5 py-3 text-primary-main font-medium hover:bg-gray-100 transition-all rounded-md cursor-pointer'>Cancel</button>
									<button
										type="submit"
										className='w-28 h-full px-5 py-3 bg-primary-main text-white font-medium rounded-md hover:shadow-md !shadow-primary-main transition-all cursor-pointer'>Submit</button>
								</div>
							</form>
						</div >
					)
				}
			</motion.div >
			<motion.div
				className='fixed inset-0 w-screen h-screen bg-black/20 z-[5]'
			/>
		</>
	)
}

export default Review