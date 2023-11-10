import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineStar } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Axios from '../../api/index'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import StarRating from '../RatingStar/RatingStar'
import { useReviewContext } from '../../hooks/useReviewContext'
const EditReview = ({ isVisibleEditReviewForm, setIsVisibleEditReviewForm, id }) => {
	const [state, dispatch] = useReviewContext()
	const checkExistReview = () => {
		const result = state.reviews.find((review) => {
			return review.post === id;
		});
		return result;
	}
	const result = checkExistReview()
	const [rating, setRating] = useState(result.numStars)
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			numStars: result.numStars,
			content: result.content
		},
		mode: "onChange"
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
			dispatch({type: "SET_LOADING_EDIT"})
			console.log(dataSend)
			const res = await Axios.patch(`/api/v1/reviews/${result.id}`, dataSend)
			console.log(res)
			if (res.status === 200) {
				dispatch({type: "EDIT_REVIEW"})
				toast.success("Edit success!")
				setIsVisibleEditReviewForm(false)
				console.log(res)
			}
		} catch (err) {
			toast.error(err.response.message)
			console.log(err)
		}
	}
	useEffect(() => {
		checkExistReview()
	},[state.isEditReviewLoading])
	return (
		<>
			<motion.div
				initial={{
					scaleY: 0,
				}}
				animate={{
					scaleY: 1,
					transition: {
						duration: 0.3,
						ease: "easeIn",
						type: "spring"
					}
				}}
				className='fixed inset-0 m-auto bg-white w-[50vh] h-fit shadow-lg rounded-md z-[6]'>
				<div className="w-full flex flex-col p-4">
					<div className="flex justify-between items-center mb-3">
						<p className='text-3xl font-medium'>Order Delivered</p>
						<AiOutlineClose size={22} onClick={() => { setIsVisibleEditReviewForm(false) }} className='cursor-pointer' />
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="w-full">
						<div className="p-3 border border-gray-400 rounded-sm">
							<div className="w-full flex gap-4 items-center mb-2">
								<span className='text-lg'>Rate the product</span>
								<StarRating totalStars={5} initialRating={rating} onRatingChange={handleRating} />
							</div>
							<span className='w-full inline-block border-b border-gray-400 text-lg pb-2'>Description</span>
							<textarea {...register("content")} className='w-full h-[200px] focus:outline-none p-2 resize-none' placeholder='Share your thoughs on the product'></textarea>
						</div>
						<div className="flex gap-2 justify-end mt-3">
							<button type="button"
								onClick={() => { setIsVisibleEditReviewForm(false) }}
								className='w-28 px-5 py-3 text-primary-main font-medium hover:bg-gray-100 transition-all rounded-md cursor-pointer'>Cancel</button>
							<button
								type="submit"
								className='w-28 h-full px-5 py-3 bg-primary-main text-white font-medium rounded-md hover:shadow-md !shadow-primary-main transition-all cursor-pointer'>Submit</button>
						</div>
					</form>
				</div>
			</motion.div>
			<motion.div
				className='fixed inset-0 w-screen h-screen bg-black/20 z-[5]'
			/>
		</>
	)
}

export default EditReview