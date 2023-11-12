import React, { useEffect, useRef, useState } from 'react'
import { PiUserCircleLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../../../hooks/useAuthContext'
import { useReviewContext } from '../../../../../hooks/useReviewContext'
import { toast } from 'react-toastify'
import { AnimatePresence } from 'framer-motion'
import Review from '../../../../../components/Review/Review'
import EditReview from '../../../../../components/Review/EditReview'
import DeleteReview from '../../../../../components/Modal/DeleteReview'
import Axios from '../../../../../api/index'
import { usePostContext } from '../../../../../hooks/usePostContext'
const ConfirmPost = ({ post }) => {

	const [state, dispatch] = useAuthContext()
	const [stateReview, dispatchReview] = useReviewContext()
	const [statePost, dispatchPost] = usePostContext()
	const [postData, setPostData] = useState(post)
	const [userPost, setUserPost] = useState(post.userPostData)
	const [isVisibleReviewForm, setIsVisibleReviewForm] = useState(false)
	const [isVisibleEditReviewForm, setIsVisibleEditReviewForm] = useState(false)
	const [isVisibleDeleteReviewModal, setIsVisibleDeleteReviewModal] = useState(false)
	const checkExistReview = () => {
		const result = stateReview.reviews.find((review) => {
			return review.post === postData.id;
		});
		return Boolean(result);
	};
	const [reviewExists, setReviewExists] = useState(checkExistReview());

	const toastId = useRef(null)

	const confirmAction = async (status, message) => {
		if (Object.entries(state.user).length === 0) {
			toast.warning("Please log in to buy")
		} else {
			toastId.current = toast.loading("Please wait ....")
			setTimeout(() => {
				dispatchPost({ type: "LOADING_HISTORY_POST", value: true })
			}, 2000);
			const data = {
				status: status
			}
			try {
				const res = await Axios.patch(`/api/v1/posts/${postData.id}/status`, data)
				if (res.status === 200) {
					console.log(res)
					toast.update(toastId.current, {
						render: message,
						type: "success",
						isLoading: false,
						autoClose: 5000,
						className: 'animated rotateY',
						closeOnClick: true,
					})
					setTimeout(() => {
						dispatchPost({ type: "LOADING_HISTORY_POST", value: false })
					}, 2000);
				}
			} catch (err) {
				console.log(err)
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
	}
	console.log(reviewExists)
	useEffect(() => {
		setReviewExists(checkExistReview())
	}, [postData.status, stateReview])
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
					<div className="w-full flex justify-between items-center border-y border-gray-400">
						<div className="flex lg:flex-[4] py-4">
							<div className="w-32 h-32 max-w-[128px]">
								<img src={`http://127.0.0.1:5000/public/images/posts/${postData.mainImage}`} alt="" className='w-full h-full object-cover' />
							</div>
							<div className="lg:w-fit w-1/2 flex flex-col gap-1 text-sm ml-3">
								<p className='text-base	font-medium tracking-wide'>{postData.title}</p>
								<p><span className='font-semibold'>General Subject:</span> {postData.isGeneralSubject === 0 ? "Yes" : "No"} </p>
								<p><span className='font-semibold'>New:</span> {postData.isNew === 0 ? "Old" : "New"} </p>
							</div>
						</div>
						<div className="flex-1 text-right">
							<span className='text-primary-main font-medium'>₫{postData.price}</span>
						</div>
					</div>
					<div className="flex justify-end items-center p-5">
						<p>Order Total: <span className='text-2xl text-primary-main'>₫{postData.price}</span></p>
					</div>
					<div className="w-full flex justify-end gap-3">
						{
							Object.entries(state.user).length > 0 && (userPost.id === state.user.user.id) ? (
								<span className='text-gray-400 text-base'>You own this post!</span>
							) : postData.status === "Unconfirmed" ? (
								<button
									type="submit"
									ref={toastId}
									onClick={() => confirmAction("Confirm", "Confirm success!")}
									className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-md hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
									Buy
								</button>
							) : postData.status === "Confirm" ? (
								<div className="flex justify-start gap-5 items-center">
									<button
										type="submit"
										ref={toastId}
										onClick={() => confirmAction("Delivered", "Delivery success!Let's review it now")}
										className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-md hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
										Received
									</button>
									<button
										type="submit"
										ref={toastId}
										onClick={() => confirmAction("Unconfirmed", "Unconfirm success")}
										className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-transparent border border-primary-main text-primary-main rounded-md hover:shadow transition-all">
										Cancel Order
									</button>
								</div>
							) : (postData.status === "Delivered" && reviewExists === false) ? (
								<button
									type="submit"
									ref={toastId}
									onClick={() => setIsVisibleReviewForm(true)}
									className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-md hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
									Review
								</button>
							) : reviewExists === true && (
								<p>
									<i className=" text-gray-500">Thank you for your review. </i>
									<i
										onClick={() => setIsVisibleEditReviewForm(true)}
										className='hover:underline hover:text-primary-main transition-all cursor-pointer text-gray-500'>Click here to edit review</i>
								</p>
							)
						}
					</div>
				</div>
			</div>
			<AnimatePresence mode='wait'>
				{
					isVisibleReviewForm && (
						<Review setIsVisibleReviewForm={setIsVisibleReviewForm} isVisibleReviewForm={isVisibleReviewForm} id={postData.id} />
					)
				}
				{
					isVisibleEditReviewForm && (
						<EditReview setIsVisibleEditReviewForm={setIsVisibleEditReviewForm} isVisibleEditReviewForm={isVisibleEditReviewForm} id={postData.id} />
					)
				}
				{
					stateReview.isEditReviewLoading && window.location.reload()
				}
				{
					isVisibleDeleteReviewModal && (
						<DeleteReview postID={postData.id} setIsVisibleDeleteReviewModal={setIsVisibleDeleteReviewModal} />
					)
				}
				{
					stateReview.isDeleteReviewLoading && window.location.reload()
				}
				{
					stateReview.isDeleteReviewLoading && toast.success("Delete review success")
				}
			</AnimatePresence>
		</>
	)
}

export default ConfirmPost