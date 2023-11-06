import React, { useRef, useState } from 'react'
import { PiUserCircleLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../../../hooks/useAuthContext'
import { toast } from 'react-toastify'
import { AnimatePresence } from 'framer-motion'
import Review from '../../../../../components/Review/Review'

const ConfirmPost = ({ post }) => {

	const [state, dispatch] = useAuthContext()
	const [userPost, setUserPost] = useState(post.userPostData)
	const [isVisibleReviewForm, setIsVisibleReviewForm] = useState(false)
	const toastId = useRef(null)

	const confirmAction = async (status, message) => {
		if (Object.entries(state.user).length === 0) {
			toast.warning("Please log in to buy")
		} else {
			toastId.current = toast.loading("Please wait ....")
			const data = {
				status: status
			}
			try {
				const res = await Axios.patch(`/api/v1/posts/${post.id}/status`, data)
				if (res.status === 200) {
					console.log(res)
					setDetailPost(res.data.data.data)
					toast.update(toastId.current, {
						render: message,
						type: "success",
						isLoading: false,
						autoClose: 5000,
						className: 'animated rotateY',
						closeOnClick: true,
					})
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
			}
		}
	}

	return (
		<>
			<div className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm">
				<div className="w-full flex flex-row justify-between items-center">
					<div className="flex gap-3 items-center">
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={`http://127.0.0.1:5000/public/images/users/${userPost.avatar}`} alt="" className='w-full h-full object-cover' />
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
					<span className="status uppercase text-base font-semibold !leading-7 text-primary-900">{post.status}</span>
				</div>
				<div className="my-1">
					<div className="w-full flex justify-between items-center border-y border-gray-400">
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
					<div className="flex justify-end items-center p-5">
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
									onClick={() => confirmAction("Confirm", "Confirm success!")}
									className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-md hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
									Buy
								</button>
							) : post.status === "Confirm" ? (
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
							) : (
								<button
									type="submit"
									ref={toastId}
									onClick={() => setIsVisibleReviewForm(true)}
									className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-md hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
									Review
								</button>
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
			</AnimatePresence>
		</>
	)
}

export default ConfirmPost