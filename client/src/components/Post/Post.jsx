import React, { useEffect, useRef, useState } from 'react';
import { Avatar, LoginImg } from '../../assets';
import { BiDotsVerticalRounded, BiTrash } from 'react-icons/bi';
import { AiOutlineEdit, AiFillCaretRight, AiOutlineAlert } from 'react-icons/ai';
import { PlaceHolderPostImg } from '../../assets';
import { Link } from 'react-router-dom';
import EditPost from './EditPost';
import Modal from '../Modal';
import Axios from '../../api/index';
import { AnimatePresence } from 'framer-motion';
import { useAuthContext } from '../../hooks/useAuthContext';
import Report from '../Report'
import { usePostContext } from '../../hooks/usePostContext';
import { toast } from 'react-toastify';
const Post = ({ post }) => {
	const [isVisibleMenuPost, setIsVisibleMenuPost] = useState(false)
	const [isVisibleReport, setIsVisibleReport] = useState(false)
	const [isVisibleEditPost, setIsVisibleEditPost] = useState(false)
	const [isVisibleModalDelete, setIsVisibleModalDelete] = useState(false)
	const [selectedFile, setSelectedFile] = useState(null);
	const [timeAgo, setTimeAgo] = useState('');
	const toastId = useRef(null)
	const [state, dispatch] = useAuthContext()
	const [statePost, dispatchPost] = usePostContext()
	const handleVisibleMenuPost = () => {
		setIsVisibleMenuPost(!isVisibleMenuPost);
	};
	const menuOption = [
		{
			title: 'Edit Post',
			icon: AiOutlineEdit,
			handle: () => {
				setIsVisibleEditPost(!isVisibleEditPost);
			},
		},
		{
			title: 'Delete Post',
			icon: BiTrash,
			handle: () => {
				setIsVisibleModalDelete(!isVisibleModalDelete);
			},
		},
	];
	useEffect(() => {
		const calculateTimeAgo = () => {
			const now = new Date();
			const created = new Date(post.createdAt);
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
		calculateTimeAgo();
	}, [statePost.isLoading, post.createdAt]);
	const confirmAction = async () => {
		toastId.current = toast.loading("Please wait ....")
		try {
			const res = await Axios.patch(`/api/v1/posts/${post.id}/updateStatus`)
			if (res.status === 200) {
				console.log(res)
				// dispatchPost({ type: "CONFIRM_POST",value: post })
				toast.update(toastId.current, {
					render: "Confirm Success!",
					type: "success",
					isLoading: false,
					autoClose: 5000,
					className: 'animated rotateY',
					closeOnClick: true,
				})
			}
		} catch (err) {
			toast.update(toastId.current, {
				render: "Confirm Fail!",
				type: "error",
				isLoading: false,
				autoClose: 5000,
				className: 'animated',
				closeOnClick: true,
			})
			console.log(err)
		}
	}
	return (
		<>
			<div className="w-full h-fit px-6 py-5 border border-gray-400 shadow-md rounded-lg mb-8">
				<div className="w-full flex flex-col">
					<div className="w-full flex justify-between items-center relative">
						<div className="flex gap-3">
							<div className="w-14 h-14 rounded-full overflow-hidden">
								<Link to={`/profile/${post.userPostData.id}`}>
									<img
										src={`http://127.0.0.1:5000/public/images/users/${post.userPostData.avatar}`}
										alt=""
										className="w-full h-full object-cover"
									/>
								</Link>
							</div>
							<div className="flex flex-col justify-start">
								<span className="name text-base font-medium">{post.userPostData.username}</span>
								<p className="text-sm leading-4 text-gray-600">{timeAgo}</p>
							</div>
						</div>
						{
							localStorage.getItem("auth") != "false" && (
								<button
									type="button"
									onClick={handleVisibleMenuPost}
									className="w-10 h-10 hover:bg-gray-100 transition-all rounded-full flex justify-center items-center"
								>
									<BiDotsVerticalRounded size={22} />
								</button>
							)
						}
						{isVisibleMenuPost && (
							<div className="w-44 h-fit bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute top-14 right-5 rounded-md overflow-hidden">
								<div className="flex flex-col relative">
									<button
										type="button"
										onClick={() => { setIsVisibleReport(!isVisibleReport) }}
										className={`flex gap-4 p-2 hover:bg-black/10 transition-all z-10 border-b`}>
										<AiOutlineAlert size={22} />
										<p className="font-medium">Report</p>
									</button>
									{
										post.userPost === JSON.parse(localStorage.getItem("user")).user.id && localStorage.getItem("user") && (
											menuOption.map((item, index) => (
												<button
													key={index}
													type="button"
													onClick={item.handle}
													className={`flex gap-4 p-2 hover:bg-black/10 transition-all z-10 ${index != menuOption.length && 'border-b'
														}`}
												>
													<item.icon size={22} />
													<p className="font-medium">{item.title}</p>
												</button>
											))

										)
									}
									<AiFillCaretRight
										className="absolute rotate-[180deg] -right-2 -top-[14px] text-white"
										size={30}
									/>
								</div>
							</div>
						)}
					</div>
					<div className="w-full h-[30vh] xl:h-[40vh] overflow-hidden rounded-lg border border-gray-500 mt-4 p-2">
						<Link to={`/detailPost/${post.id}`}>
							<img
								src={`http://127.0.0.1:5000/public/images/posts/${post.mainImage}`}
								alt=""
								className="w-full h-full object-cover rounded-md object-center"
							/>
						</Link>
					</div>
					<table className="flex border border-gray-500 rounded-lg my-4">
						<thead className="flex flex-col border-r w-1/2 xl:w-1/5 border-gray-500">
							<tr className="border-b p-2 border-gray-500 font-medium text-sm">
								<th>Title</th>
							</tr>
							<tr className="border-b p-2 border-gray-500 font-medium text-sm">
								<th>Price</th>
							</tr>
							<tr className="border-b p-2 border-gray-500 font-medium text-sm">
								<th>Major</th>
							</tr>
							<tr className="border-b p-2 border-gray-500 font-medium text-sm">
								<th>Type</th>
							</tr>
							<tr className="p-2 font-medium text-sm">
								<th>Description</th>
							</tr>
						</thead>
						<tbody className="flex flex-col w-1/2 xl:w-4/5">
							<tr className="p-2 text-sm">
								<td>{post.title}</td>
							</tr>
							<tr className="p-2 border-t border-gray-500 text-sm">
								<td>{post.price}</td>
							</tr>
							<tr className="p-2 border-t border-gray-500 text-sm">
								<td>{post.isGeneralSubject ? 'Yes' : 'No'}</td>
							</tr>
							<tr className="p-2 border-t border-gray-500 text-sm">
								<td>{post.isNew ? 'New' : 'Old'}</td>
							</tr>
							<tr className="p-2 border-t border-gray-500 text-sm">
								<td>{post.description}</td>
							</tr>
						</tbody>
					</table>
					<button
						type="submit"
						ref={toastId}
						onClick={() => confirmAction()}
						className="px-10 py-2 bg-primary-main text-white w-fit rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all"
					>
						Buy
					</button>
				</div>
			</div>
			{isVisibleEditPost && (
				<EditPost post={post} handleEditPost={setIsVisibleEditPost} isVisibleEditPost={isVisibleEditPost} />
			)}
			<AnimatePresence mode="wait">
				{isVisibleModalDelete && (
					<Modal
						postID={post.id}
						isVisibleModalDelete={isVisibleModalDelete}
						setIsVisibleModalDelete={setIsVisibleModalDelete}
					/>
				)}
				{
					isVisibleReport && (
						<Report post={post} setIsVisibleReport={setIsVisibleReport} />
					)
				}
			</AnimatePresence>
		</>
	);
};

export default Post;
