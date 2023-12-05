import React, { useEffect, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { AiFillStar, AiOutlineGlobal } from 'react-icons/ai'
import { Avatar } from '../../../../assets'
import { Link, useParams } from 'react-router-dom'
import { useReviewContext } from '../../../../hooks/useReviewContext'
import Axios from '../../../../api/index'
import ReviewPost from './ReviewComponents/ReviewPost'
import { toast } from 'react-toastify'
const Review = () => {

	const [state, dispatch] = useReviewContext()
	const [reviews, setReviews] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const userID = useParams()
	const getPostReview = async () => {
		try {
			setIsLoading(true)
			const res = await Axios.get(`/api/v1/posts?filter=equals(userPost,'${userID.id}')&include=reviewData.userReviewData`)
			if (res.status === 200) {
				console.log(res.data.data.data)
				setReviews(res.data.data.data)
				setIsLoading(false)
			}
		} catch (err) {
			setIsLoading(false)
			console.log(err)
		}
	}
	const checkExistData = () => {
		return reviews.some((review) => {
			return review.reviewData != null
		})
	}
	const handleHideReview = async (id, isShow) => {
		const data = {
			isShow: isShow
		}
		try {
			const res = await Axios.patch(`/api/v1/reviews/${id}/show`, data)
			if (res.status === 200) {
				console.log(res)
				toast.success(`${isShow === 1 ? "Show" : "Hide"} review success`)
				getPostReview()
			}
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getPostReview()
	}, [])
	return (
		<div className='flex flex-col gap-3 lg:mt-0 mt-[66px]'>
			{/* {
				reviews.map((review, index) => (
					<ReviewPost review={review} userReview={review.reviewData} />
				))
			} */}
			{
				Boolean(checkExistData()) === true && reviews.length != 0 ? (
					reviews.map((review, index) => (
						(review.reviewData != null) &&
						<div
							key={index}
							className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm" >
							<div className="w-full flex flex-row justify-between items-center">
								<div className="w-full flex justify-between gap-3 items-center">
									<div className="flex gap-3">
										<div className ="w-14 h-14 rounded-full overflow-hidden">
											<img
												src={`http://127.0.0.1:5000/public/images/users/avatar/${review.reviewData.userReviewData.avatar}`}
												alt="" className='w-full h-full object-cover' />
										</div>
										<div className="flex flex-col items-start">
											<span className="name font-medium text-lg">
												{review.reviewData.userReviewData.username}
											</span>
											<div className='flex justify-start'>
												{
													Array(review.reviewData.numStars).fill(null).map((_, index) => (
														<AiFillStar key={index} className='text-yellow-500' size={14} />
													))
												}
											</div>
										</div>
									</div>
									<button
										type='button'
										onClick={() => { handleHideReview(review.reviewData.id, review.reviewData.isShow === true ? 0 : 1) }}
										className='rounded-md px-5 py-2 bg-primary-800 text-white transition-all hover:bg-primary-700'>{review.reviewData.isShow === true ? "Hide Review" : "Show Review"}</button>
								</div>
							</div>
							<div className="flex p-2 border border-gray-400 rounded-sm">
								<p>{review.reviewData.content}</p>
							</div>
						</div>
					))
				) : (
					<div className="w-full h-screen flex justify-center items-center">
						<p className='text-6xl text-gray-500 font-mono'>Nothing in here</p>
					</div>
				)
			}
		</div >
	)
}

export default Review