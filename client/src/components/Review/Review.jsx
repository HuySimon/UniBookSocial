import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineStar } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Axios from '../../api/index'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import StarRating from '../RatingStar/RatingStar'
const Review = ({ isVisibleReviewForm, setIsVisibleReviewForm, id }) => {
	const [rating, setRating] = useState(0)
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			content: ""
		},
	})
	const handleRating = (rate) => {
		setRating(rate)
	}
	const onSubmit = async (data) => {
		try {
			const dataSend = {
				numStars: rating,
				content: data.content,
				post: id
			}
			const res = await Axios.post(`/api/v1/reviews`, dataSend)
			if (res.status === 200) {
				toast.success("Thank you for your review !")
				console.log(res)
			}
		} catch (err) {
			toast.error(err.response.message)
			console.log(err)
		}
	}
	console.log(rating)
	return (
		<motion.div
			className='fixed inset-0 m-auto bg-white w-[50vh] h-fit shadow-lg rounded-md'>
			<div className="w-full flex flex-col p-4">
				<div className="flex justify-between items-center mb-3">
					<p className='text-3xl font-medium'>Order Delivered</p>
					<AiOutlineClose size={22} onClick={() => { setIsVisibleReviewForm(false) }} className='cursor-pointer' />
				</div>
				<form className="w-full">
					<div className="p-3 border border-gray-400 rounded-sm">
						<div className="w-full flex gap-4 items-center mb-2">
							<span className='text-lg'>Rate the product</span>
							<StarRating totalStars={5} initialRating={rating} onRatingChange={handleRating} />
						</div>
						<span className='w-full inline-block border-b border-gray-400 text-lg pb-2'>Description</span>
						<textarea {...register("content")} className='w-full h-[200px] focus:outline-none p-2' placeholder='Share your thoughs on the product'></textarea>
					</div>
					<div className="flex gap-2 justify-end mt-3">
						<button type="button"
							onClick={() => { setIsVisibleReviewForm(false) }}
							className='w-28 px-5 py-3 text-primary-main font-medium'>Cancel</button>
						<button type="submit" className='w-28 px-5 py-3 bg-primary-main text-white font-medium rounded-md'>Submit</button>
					</div>
				</form>
			</div>
		</motion.div>
	)
}

export default Review