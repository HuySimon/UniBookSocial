import React, { useEffect, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { AiFillStar, AiOutlineGlobal } from 'react-icons/ai'
import { Avatar } from '../../../../assets'
import { Link } from 'react-router-dom'
import { useReviewContext } from '../../../../hooks/useReviewContext'
import Axios from '../../../../api/index'
const Review = () => {

	const [state, dispatch] = useReviewContext()
	const [userReviews, setUserReviews] = useState(null)
	const [reviews, setReviews] = useState([])
	const getReviews = async () => {
		try {
			let array = []
			state.reviews.map(async (review) => {
				const res = await Axios.get(`/api/v1/users/${review.user}`)
				if (res.status === 200) {
					// console.log(res.data.data.data)
					array.push(res.data.data.data)
				}
			})
			setUserReviews(array)
			setReviews(state.reviews)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		getReviews()
	}, [])
	return (
		<div className='flex flex-col gap-3 lg:mt-0 mt-[66px]'>
			<div className="flex gap-3 items-center w-full border border-gray-400 p-2 rounded-sm">
				<RiSearch2Line size={28} className='text-gray-400' />
				<input type="text" name="" id="" className='border-none w-full focus:outline-none text-black placeholder:text-sm' placeholder='You can search by anything....' />
			</div>
			{
				reviews.map((review, index) => (
					<div
						key={index}
						className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm">
						<div className="w-full flex flex-row justify-between items-center">
							<div className="flex gap-3 items-center">
								<div className="w-14 h-14 rounded-full overflow-hidden">
									<img src={Avatar} alt="" className='w-full h-full object-cover' />
								</div>
								<div className="flex flex-col items-start">
									<span className="name font-medium text-lg">
										John Doe
										{/* {userReviews[index].username} */}
									</span>
									<div className='flex justify-start'>
										{
											Array(review.numStars).fill(null).map((_, index) => (
												<AiFillStar key={index} className='text-yellow-500' size={14} />
											))
										}
									</div>
								</div>
							</div>
						</div>
						<div className="flex p-2 border border-gray-400 rounded-sm">
							<p>{review.content}</p>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default Review