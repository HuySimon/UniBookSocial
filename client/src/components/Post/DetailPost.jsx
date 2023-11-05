import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import Axios from '../../api/index'
import { toast } from 'react-toastify'
import { useAuthContext } from '../../hooks/useAuthContext'
import { AnimatePresence } from 'framer-motion'
import Review from '../Review/Review'
const DetailPost = () => {
	const postID = useParams()
	const [state, dispatch] = useAuthContext()
	const [detailPost, setDetailPost] = useState({})
	const [isVisibleReviewForm, setIsVisibleReviewForm] = useState(false)
	const [userPost, setUserPost] = useState({})
	const [timeAgo, setTimeAgo] = useState('')
	const toastId = useRef(null)
	const fetchData = async () => {
		try {
			const res = await Axios.get(`/api/v1/posts/${postID.id}`)
			if (res.status === 200) {
				setDetailPost(res.data.data.data)
				setUserPost(res.data.data.data.userPostData)
			}
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		const calculateTimeAgo = () => {
			const now = new Date();
			const created = new Date(detailPost.createdAt);
			const timeDifference = now - created;
			const seconds = Math.floor(timeDifference / 1000);

			if (seconds < 60) {
				setTimeAgo(`${seconds} seconds ago`);
			} else if (seconds < 3600) {
				const minutes = Math.floor(seconds / 60);
				setTimeAgo(`${minutes} minutes ago`);
			} else if (seconds < 86400) {
				const hours = Math.floor(seconds / 3600);
				setTimeAgo(`${hours} hours ago`);
			} else {
				const days = Math.floor(seconds / 86400);
				setTimeAgo(`${days} days ago`);
			}
		};
		calculateTimeAgo()
		fetchData()
	}, [detailPost.createdAt])
	const confirmAction = async (status, message) => {
		if (Object.entries(state.user).length === 0) {
			toast.warning("Please log in to buy")
		} else {
			toastId.current = toast.loading("Please wait ....")
			const data = {
				status: status
			}
			try {
				const res = await Axios.patch(`/api/v1/posts/${detailPost.id}/status`, data)
				if (res.status === 200) {
					console.log(res)
					// dispatchPost({ type: "CONFIRM_POST", value: res.data.data.data })
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
			<div className='flex w-full h-screen'>
				<div className="bg-black flex-[3] py-20 mx-auto">
					<div className="main-img w-full h-full px-10">
						<img src={`http://127.0.0.1:5000/public/images/posts/${detailPost.mainImage}`} alt="Product Image" className='w-full h-full object-contain object-center rounded-md' />
					</div>
				</div>
				<div className="w-full flex flex-col bg-white flex-1 p-5">
					<div className="w-full flex justify-between items-center">
						<div className="flex gap-3">
							<div className="w-14 h-14 rounded-full overflow-hidden">
								<img src={`http://127.0.0.1:5000/public/images/users/${userPost.avatar}`} alt="User Image" className='w-full h-full object-cover' />
							</div>
							<div className="flex flex-col justify-start">
								<span className="name font-medium">
									{userPost.username}
								</span>
								<p className='text-[10px] leading-4 text-gray-600'>{timeAgo}</p>
							</div>
						</div>
						<button className='w-10 h-10 hover:bg-gray-100 transition-all rounded-full flex justify-center items-center'>
							<BiDotsVerticalRounded size={22} />
						</button>
					</div>
					<div className="h-full flex flex-col justify-between">
						<div className="flex flex-col">
							<table className='flex border border-gray-500 rounded-lg my-4'>
								<thead className='flex flex-col border-r w-1/2 border-gray-500'>
									<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
										<th>Title</th>
									</tr>
									<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
										<th>Price</th>
									</tr>
									<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
										<th>Major</th>
									</tr>
									<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
										<th>Type</th>
									</tr>
									<tr className='p-2 font-medium text-sm'>
										<th>Description</th>
									</tr>
								</thead>
								<tbody className='flex flex-col w-1/2 xl:w-4/5'>
									<tr className='p-2 text-sm truncate'>
										<td>{detailPost.title}</td>
									</tr>
									<tr className='p-2 border-t border-gray-500 text-sm'>
										<td>{detailPost.price}</td>
									</tr>
									<tr className='p-2 border-t border-gray-500 text-sm'>
										<td>{
											detailPost.isGeneralSubject === false ? "Yes" : "No"
										}</td>
									</tr>
									<tr className='p-2 border-t border-gray-500 text-sm'>
										<td>{detailPost.isNew ? "New" : "Old"}</td>
									</tr>
									<tr className='p-2 border-t border-gray-500 text-sm'>
										<td>
											{detailPost.description}
										</td>
									</tr>
								</tbody>
							</table>
							<table className='flex border border-gray-500 rounded-lg my-4'>
								<thead className='flex flex-col border-r w-1/2 border-gray-500'>
									<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
										<th>Name</th>
									</tr>
									<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
										<th>Email</th>
									</tr>
									<tr className='p-2 font-medium text-sm'>
										<th>Contact</th>
									</tr>
								</thead>
								<tbody className='flex flex-col w-1/2 xl:w-4/5'>
									<tr className='p-2 text-sm'>
										<td>{userPost.username}</td>
									</tr>
									<tr className='p-2 border-t border-gray-500 text-sm'>
										<td>{userPost.email}</td>
									</tr>
									<tr className='p-2 border-t border-gray-500 text-sm'>
										<td>{!userPost.phoneNumber ? "This user don't have a phone number" : userPost.phoneNumber}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="flex flex-col gap-3">
							<p className='text-sm text-gray-500'>Status: <span>{detailPost.status}</span></p>
							{
								Object.entries(state.user).length > 0 && (userPost.id === state.user.user.id) ? (
									<span className='text-gray-400 text-base'>You own this post!</span>
								) : detailPost.status === "Unconfirmed" ? (
									<button
										type="submit"
										ref={toastId}
										onClick={() => setIsVisibleReviewForm(true)}
										// onClick={() => confirmAction("Confirm", "Confirm success!")}
										className="w-36 px-6 py-3 bg-primary-main text-white rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
										Buy
									</button>
								) : detailPost.status === "Confirm" ? (
									<div className="flex justify-start gap-5 items-center">
										<button
											type="submit"
											ref={toastId}
											onClick={() => confirmAction("Delivery", "Delivery success!Let's review it now")}
											className="w-36 px-6 py-3 bg-primary-main text-white rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
											Received
										</button>
										<button
											type="submit"
											ref={toastId}
											onClick={() => confirmAction("Unconfirmed", "Unconfirm success")}
											className="w-36 px-6 py-3 bg-transparent border border-primary-main text-primary-main rounded-lg hover:shadow transition-all">
											Cancel Order
										</button>
									</div>
								) : (
									<button
										type="submit"
										ref={toastId}
										// onClick={() => confirmAction("Review")}
										className="w-36 px-6 py-3 bg-primary-main text-white rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
										Review
									</button>
								)
							}
						</div>
					</div>
				</div>
				<button
					type='button'
					onClick={() => window.history.back()}
					className='w-10 h-10 absolute mx-auto top-5 left-5 cursor-pointer'
				>
					<AiOutlineClose size={30} color='#000' className='w-12 h-12 p-3 bg-white rounded-full' />
				</button>
			</div>
			<AnimatePresence mode='wait'>
				{
					isVisibleReviewForm && (
						<Review setIsVisibleReviewForm={setIsVisibleReviewForm} isVisibleReviewForm={isVisibleReviewForm} id={detailPost.id} />
					)
				}
			</AnimatePresence>
		</>
	)
}

export default DetailPost