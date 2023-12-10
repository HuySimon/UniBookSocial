import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretRight, AiOutlineAlert, AiOutlineClose } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import Axios from '../../api/index';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../hooks/useAuthContext';
import { AnimatePresence } from 'framer-motion';
import Review from '../Review/Review';
import { usePostContext } from '../../hooks/usePostContext';
import Report from '../Report';
import { useReviewContext } from '../../hooks/useReviewContext';
import GenericModal from '../Modal/GenericModal';

const DetailPost = () => {
	const postID = useParams();
	const [state, dispatch] = useAuthContext();
	const [stateReview, dispatchReview] = useReviewContext();
	const [actionType, setActionType] = useState(["Confirm", "Confirm success!"]);
	const [detailPost, setDetailPost] = useState({});
	const [isVisibleReviewForm, setIsVisibleReviewForm] = useState(false);
	const [isVisibleMenuPost, setIsVisibleMenuPost] = useState(false);
	const [isVisibleReport, setIsVisibleReport] = useState(false);
	const [isVisibleModal, setIsVisibleModal] = useState(false);
	const [userPost, setUserPost] = useState({});
	const [userConfirmData, setUserConfirmData] = useState({})
	const [timeAgo, setTimeAgo] = useState('');
	const toastId = useRef(null);

	const handleVisibleMenuPost = () => {
		setIsVisibleMenuPost(!isVisibleMenuPost);
	};
	const fetchData = async () => {
		try {
			const res = await Axios.get(`/api/v1/posts/${postID.id}?include=userPostData,userConfirmData`);
			if (res.status === 200) {
				setDetailPost(res.data.data.data);
				setUserPost(res.data.data.data.userPostData);
				setUserConfirmData(res.data.data.data.userConfirmData);
				console.log(res)
			}
		} catch (err) {
			console.error(err);
		}
	};

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

	const checkExistReview = () => {
		if (stateReview.reviews) {
			return stateReview.reviews.some((review) => review.post === detailPost.id);
		} else {
			return false;
		}
	};

	const [reviewExists, setReviewExists] = useState(checkExistReview());

	useEffect(() => {
		calculateTimeAgo();
		setReviewExists(checkExistReview());
		fetchData();
	}, [detailPost.createdAt, stateReview]);

	const confirmAction = async (status, message) => {
		if (Object.entries(state.user).length === 0) {
			toast.warning("Please log in to buy");
		} else {
			toastId.current = toast.loading("Please wait ....");
			const data = { status };

			try {
				const res = await Axios.patch(`/api/v1/posts/${detailPost.id}/status`, data);
				if (res.status === 200) {
					setDetailPost(res.data.data.data);
					setIsVisibleModal(false);
					toast.update(toastId.current, {
						render: message,
						type: "success",
						isLoading: false,
						autoClose: 5000,
						className: 'animated rotateY',
						closeOnClick: true,
					});
				}
			} catch (err) {
				console.error(err);
				setIsVisibleModal(false);
				toast.update(toastId.current, {
					render: "Confirm Fail",
					type: "error",
					isLoading: false,
					autoClose: 5000,
					className: 'animated',
					closeOnClick: true,
				});
			}
		}
	};
	return (
		<>
			<div className='flex w-full h-screen'>
				<div className="bg-black/90 flex-[3] py-20 mx-auto">
					<div className="main-img w-full h-full px-10">
						<img src={`http://127.0.0.1:5000/public/images/posts/${detailPost.mainImage}`} alt="Product Image" className='w-full h-full object-contain object-center rounded-md' />
					</div>
				</div>
				<div className="w-full flex flex-col bg-white flex-1 p-5">
					<div className="w-full flex justify-between items-center">
						<div className="flex gap-3">
							<div className="w-14 h-14 rounded-full overflow-hidden">
								<Link to={`/profile/${userPost.id}`} target='_blank'>
									<img src={`http://127.0.0.1:5000/public/images/users/avatar/${userPost.avatar}`} alt="User Image" className='w-full h-full object-cover' />
								</Link>
							</div>
							<div className="flex flex-col justify-stretch">
								<span className="name text-base font-medium">{userPost.username}</span>
								<p className="text-sm leading-4 text-gray-600">{timeAgo}</p>
								<p className="text-[12px] leading-4 text-gray-600">#{detailPost.id}</p>
							</div>
						</div>
						{
							localStorage.getItem("auth") != "false" && (state.user) && (state.user.user.id != userPost.id) && (
								<button
									type="button"
									onClick={handleVisibleMenuPost}
									className="w-10 h-10 hover:bg-gray-100 transition-all rounded-full flex justify-center items-center">
									<BiDotsVerticalRounded size={22} />
								</button>
							)
						}
						{isVisibleMenuPost && (
							<div className="w-44 h-fit bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute top-16 right-8 rounded-md overflow-hidden">
								<div className="flex flex-col relative">
									<button
										type="button"
										onClick={() => { setIsVisibleReport(!isVisibleReport) }}
										className={`flex gap-4 p-2 hover:bg-black/10 transition-all z-10 border-b`}>
										<AiOutlineAlert size={22} />
										<p className="font-medium">Report</p>
									</button>
									<AiFillCaretRight
										className="absolute rotate-[180deg] -right-2 -top-[14px] text-white"
										size={30}
									/>
								</div>
							</div>
						)}
					</div>
					<div className="h-full flex flex-col justify-between">
						<div className="flex flex-col">
							<div className="w-full flex flex-col">
							<p className='text-sm text-gray-500'>Post Information:</p>
							<table className='flex border border-gray-500 rounded-md my-2'>
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
								<tbody className='flex flex-col w-4/5'>
									<tr className='p-2 text-sm break-words'>
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
							</div>
							<div className="flex flex-col w-full">
								<p className='text-sm text-gray-500'>User Post Information:</p>
								<table className='flex border border-gray-500 rounded-md my-2'>
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
									<tbody className='flex flex-col w-4/5'>
										<tr className='p-2 text-sm'>
											<td>{userPost.username}</td>
										</tr>
										<tr className='p-2 border-t border-gray-500 text-sm break-words w-full'>
											<td>{userPost.email}</td>
										</tr>
										<tr className='p-2 border-t border-gray-500 text-sm'>
											<td>{!userPost.phoneNumber ? "This user don't have a phone number" : userPost.phoneNumber}</td>
										</tr>
									</tbody>
								</table>
							</div>
							{
								userConfirmData != null && Object.entries(userConfirmData).length > 0 && (
									<div className="flex flex-col w-full">
										<p className='text-sm text-gray-500'>User Confirm Information:</p>
										<table className='flex border border-gray-500 rounded-md my-2'>
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
											<tbody className='flex flex-col w-4/5'>
												<tr className='p-2 text-sm'>
													<td>{userConfirmData.username}</td>
												</tr>
												<tr className='p-2 border-t border-gray-500 text-sm break-words w-full'>
													<td>{userConfirmData.email}</td>
												</tr>
												<tr className='p-2 border-t border-gray-500 text-sm'>
													<td>{!userConfirmData.phoneNumber ? "This user don't have a phone number" : userConfirmData.phoneNumber}</td>
												</tr>
											</tbody>
										</table>
									</div>
								)
							}
						</div>
						<div className="flex flex-col gap-3">
							{
								Object.entries(state.user).length > 0 && state.user.user.role === 1 && (
									<p className='text-sm text-gray-500'>Status: <span>{detailPost.status}</span></p>
								)
							}
							{
								Object.entries(state.user).length === 0 && (
									<button
										type="submit"
										ref={toastId}
										onClick={() => {
											setIsVisibleModal(true)
											setActionType(["Confirm", "Confirm success!"])
										}}
										className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
										Buy
									</button>
								)
							}
							{
								Object.entries(state.user).length > 0 && (userPost.id === state.user.user.id) ? (
									<span className='text-gray-400 text-base'>You own this post!</span>
								) : (detailPost.status === "Unconfirmed" && Object.entries(state.user).length > 0 && state.user.user.role === 1) ? (
									<button
										type="submit"
										ref={toastId}
										onClick={() => {
											setIsVisibleModal(true)
											setActionType(["Confirm", "Confirm success!"])
										}}
										className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
										Buy
									</button>
								) : detailPost.status === "Confirm" ? (
									<div className="flex justify-start gap-5 items-center">
										<button
											type="submit"
											ref={toastId}
											onClick={() => {
												setIsVisibleModal(true)
												setActionType(["Delivered", "Delivery success!Let's review it now"])
											}}
											className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
											Received
										</button>
										<button
											type="button"
											ref={toastId}
											onClick={() => {
												setIsVisibleModal(true)
												setActionType(["Unconfirmed", "Unconfirm successfully"])
											}}
											className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-transparent border border-primary-main text-primary-main rounded-lg hover:shadow transition-all">
											Cancel Order
										</button>
									</div>
								) : (detailPost.status === "Delivered" && reviewExists === false) ? (
									<button
										type="submit"
										ref={toastId}
										onClick={() => setIsVisibleReviewForm(true)}
										className="w-28 xl:w-36 px-4 xl:px-6 py-3 bg-primary-main text-white rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all">
										Review
									</button>
								) : reviewExists === true && (
									<p>
										<i className=" text-gray-500">Thank you for your review. </i>
									</p>
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
				{
					isVisibleModal && (
						<GenericModal actionType={actionType} setIsVisibleModal={setIsVisibleModal} confirmAction={confirmAction} />
					)
				}
				{
					isVisibleReport && (
						<Report post={detailPost} setIsVisibleReport={setIsVisibleReport} />
					)
				}
			</AnimatePresence>
		</>
	)
}

export default DetailPost