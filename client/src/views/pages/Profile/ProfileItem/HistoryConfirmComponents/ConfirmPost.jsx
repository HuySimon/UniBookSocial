import React, { useEffect, useRef, useState } from 'react'
import { PiUserCircleLight } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../../../hooks/useAuthContext'
import { useReviewContext } from '../../../../../hooks/useReviewContext'
import { toast } from 'react-toastify'
import { AnimatePresence } from 'framer-motion'
import Review from '../../../../../components/Review/Review'
import EditReview from '../../../../../components/Review/EditReview'
import DeleteReview from '../../../../../components/Modal/DeleteReview'
import Axios from '../../../../../api/index'
import { usePostContext } from '../../../../../hooks/usePostContext'
import GenericModal from '../../../../../components/Modal/GenericModal'
import { AiFillStar } from 'react-icons/ai'
const ConfirmPost = ({ post }) => {
	const [state, dispatch] = useAuthContext()
	const [stateReview, dispatchReview] = useReviewContext()
	const [statePost, dispatchPost] = usePostContext()
	const [userPost, setUserPost] = useState(post.userPostData)
	const [review, setReview] = useState({})
	const [actionType, setActionType] = useState(["Confirm", "Confirm success!"]);
	const [isVisibleReviewForm, setIsVisibleReviewForm] = useState(false)
	const [isVisibleEditReviewForm, setIsVisibleEditReviewForm] = useState(false)
	const [isVisibleDeleteReviewModal, setIsVisibleDeleteReviewModal] = useState(false)
	const [isVisibleModal, setIsVisibleModal] = useState(false)
	const navigate = useNavigate()
	const checkExistReview = () => {
		const result = stateReview.reviews.find((review) => {
			return review.post === post.id;
		});
		return Boolean(result);
	};
	const [reviewExists, setReviewExists] = useState(false);

	const toastId = useRef(null)

	const confirmAction = async (status, message) => {
		toastId.current = toast.loading("Please wait ....")
		dispatchPost({ type: "LOADING_HISTORY_POST", value: true })
		const data = {
			status: status
		}
		try {
			const res = await Axios.patch(`/api/v1/posts/${post.id}/status`, data)
			if (res.status === 200) {
				console.log(res)
				setIsVisibleModal(false)
				toast.update(toastId.current, {
					render: message,
					type: "success",
					isLoading: false,
					autoClose: 5000,
					className: 'animated rotateY',
					closeOnClick: true,
				})
				dispatchPost({ type: "LOADING_HISTORY_POST", value: false })
			}
		} catch (err) {
			console.log(err)
			setIsVisibleModal(false)
			toast.update(toastId.current, {
				render: "Confirm Fail",
				type: "error",
				isLoading: false,
				autoClose: 5000,
				className: 'animated',
				closeOnClick: true,
			})
			dispatchPost({ type: "LOADING_HISTORY_POST", value: false })
		}
	}
	const confirmDeleteReview = async (message) => {
		setTimeout(() => {
			dispatchReview({ type: "DELETE_REVIEW", value: true })
		}, 500);
		try {
			const res = await Axios.delete(`/api/v1/reviews/${review.id}`)
			if (res.status === 204) {
				toast.success(message)
				setTimeout(() => {
					dispatchReview({ type: "DELETE_REVIEW", value: false })
				}, 500);
				setIsVisibleDeleteReviewModal(false)
			}
		} catch (error) {
			setIsVisibleDeleteReviewModal(false)
			dispatchReview({ type: "DELETE_REVIEW", value: false })
			console.log(error)
		}
	}
	useEffect(() => {
		const checkExistReview = () => {
			const result = stateReview.reviews.find((review) => {
				return review.post === post.id;
			});
			return Boolean(result);
		};
		setReviewExists(checkExistReview())
		const getDataReview = () => {
			const result = stateReview.reviews.find((review) => {
				return review.post === post.id;
			});
			return result;
		}
		setReview(getDataReview())
	}, [post.status, review, reviewExists, isVisibleDeleteReviewModal, stateReview])

	return (
		<>
			<div className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm">
				<div className="w-full flex flex-row justify-between items-center">
					<div className="flex gap-3 items-center">
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={`http://127.0.0.1:5000/public/images/users/avatar/${userPost.avatar}`} alt="" className='w-full h-full object-cover' />
						</div>
						<span className="name font-medium text-lg">
							{userPost.username}
						</span>
						<Link
							to={`/profile/${userPost.id}`}
							target='_blank'
							className="p-1 border text-sm flex items-center text-gray-700">
							<PiUserCircleLight size={18} />
							<span className='inline-block ml-1'>View Profile</span>
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<span className="status uppercase text-base font-semibold !leading-7 text-primary-900">{post.status}</span>
						{
							reviewExists === true && (
								<button
									type='submit'
									onClick={() => setIsVisibleDeleteReviewModal(true)}
									className='p-2 bg-red-400 rounded-sm text-sm text-white hover:bg-red-500 transition-all'>
									Delete Review
								</button>
							)
						}
					</div>
				</div>
				<div className="my-1">
					<div
						onClick={() => { navigate(`/detailPost/${post.id}`) }}
						className="w-full flex justify-between items-center border-y border-gray-400">
						<div className="flex lg:flex-[4] py-4">
							<div className="w-32 h-32 max-w-[128px]">
								<img src={`http://127.0.0.1:5000/public/images/posts/${post.mainImage}`} alt="" className='w-full h-full object-cover' />
							</div>
							<div className="lg:w-fit w-1/2 flex flex-col gap-1 text-sm ml-3">
								<p className='text-base	font-medium tracking-wide'>{post.title}</p>
								<p><span className='font-semibold'>General Subject:</span> {post.isGeneralSubject === 0 ? "Yes" : "No"} </p>
								<p><span className='font-semibold'>New:</span> {post.isNew === 0 ? "Old" : "New"} </p>
							</div>
						</div>
						<div className="flex-1 text-right">
							<span className='text-primary-main font-medium'>₫{post.price}</span>
						</div>
					</div>
					<div className="flex justify-end items-center pl-5 py-5">
						<p>Order Total: <span className='text-2xl text-primary-main'>₫{post.price}</span></p>
					</div>
					<div className="w-full flex justify-end gap-3">
						{
							Object.entries(state.user).length > 0 && (userPost.id === state.user.user.id) ? (
								<span className='text-gray-400 text-base'>You own this post!</span>
							) : post.status === "Unconfirmed" ? (
								<button
									type="submit"
									ref={toastId}
									onClick={() => {
										setIsVisibleModal(true)
										setActionType(["Confirmed", "Confirm success!"])
									}}
									className="w-32 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-md hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
									Buy
								</button>
							) : post.status === "Confirmed" ? (
								<div className="flex justify-start gap-5 items-center">
									<button
										type="submit"
										ref={toastId}
										onClick={() => {
											setIsVisibleModal(true)
											setActionType(["Delivered", "Delivery success!Let's review it now"])
										}}
										className="w-32 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-md hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
										Received
									</button>
									<button
										type="submit"
										ref={toastId}
										onClick={() => {
											setIsVisibleModal(true)
											setActionType(["Unconfirmed", "Unconfirm successfully"])
										}}
										className="w-32 xl:w-36 px-4 xl:px-6 py-3 bg-transparent border border-primary-main text-primary-main rounded-md hover:shadow transition-all">
										Cancel Order
									</button>
								</div>
							) : (post.status === "Delivered" && reviewExists === false) ? (
								<button
									type="submit"
									ref={toastId}
									onClick={() => setIsVisibleReviewForm(true)}
									className="w-32 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-md hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
									Review
								</button>
							) : (reviewExists === true && post.status === "Delivered") && (
								<div className="w-full flex justify-between items-center p-2 border border-gray-400">
									<div className="flex flex-col">
										<div className="flex items-center gap-2">
											<i className='text-gray-500'>Rating:</i>
											<div className="flex gap-1">
												{
													Array(review.numStars).fill(null).map((_, index) => (
														<AiFillStar key={index} className='text-yellow-400 border p-1 rounded-md border-gray-400' size={28} />
													))
												}
											</div>

										</div>
										<div className="flex gap-2">
											<i className='text-gray-500'>Description:</i>
											<p className='text-black'>{review.content}</p>
										</div>
									</div>
									<p className='flex flex-col'>
										<i className=" text-gray-500 text-right">Thank you for your review. </i>
										<i
											onClick={() => setIsVisibleEditReviewForm(true)}
											className='hover:underline hover:text-primary-main transition-all cursor-pointer text-gray-500 text-right'>Click here to edit review</i>
									</p>

								</div>
							)
						}
					</div>
				</div>
			</div>
			<AnimatePresence mode='wait'>
				{
					isVisibleReviewForm && (
						<Review setIsVisibleReviewForm={setIsVisibleReviewForm} isVisibleReviewForm={isVisibleReviewForm} id={post.id} />
					)
				}
				{
					isVisibleEditReviewForm && (
						<EditReview setIsVisibleEditReviewForm={setIsVisibleEditReviewForm} isVisibleEditReviewForm={isVisibleEditReviewForm} id={post.id} />
					)
				}
				{
					isVisibleModal && (
						<GenericModal actionType={actionType} setIsVisibleModal={setIsVisibleModal} confirmAction={confirmAction} />
					)
				}
				{
					isVisibleDeleteReviewModal && (
						<DeleteReview setIsVisibleDeleteReviewModal={setIsVisibleDeleteReviewModal} confirmDeleteReview={confirmDeleteReview} />
					)
				}
			</AnimatePresence>
		</>
	)
}

export default ConfirmPost