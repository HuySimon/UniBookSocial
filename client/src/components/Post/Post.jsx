import React, { useEffect, useRef, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiFillCaretRight, AiOutlineAlert } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useAuthContext } from '../../hooks/useAuthContext';
import Report from '../Report'
import { usePostContext } from '../../hooks/usePostContext';
import { motion } from 'framer-motion'
const Post = ({ post }) => {
	const [isVisibleMenuPost, setIsVisibleMenuPost] = useState(false)
	const [isVisibleReport, setIsVisibleReport] = useState(false)
	const [timeAgo, setTimeAgo] = useState('');
	const [state, dispatch] = useAuthContext()
	const [statePost, dispatchPost] = usePostContext()
	const handleVisibleMenuPost = () => {
		setIsVisibleMenuPost(!isVisibleMenuPost);
	};
	const modalRef = useRef(null);
	
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setIsVisibleMenuPost(false)
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
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
	return (
		<>
			<motion.div
				exit={{
					y: 100,
					opacity: 0,
					transition: {
						duration: .5
					}
				}}
				className="w-full h-fit px-6 py-5 border border-gray-400 shadow-md rounded-lg mb-8">
				<div className="w-full flex flex-col">
					<div className="w-full flex justify-between items-center relative">
						<div className="flex gap-3">
							<div className="w-14 h-14 rounded-full overflow-hidden">
								<Link to={`/profile/${post.userPostData.id}`}>
									<img
										src={`http://127.0.0.1:5000/public/images/users/avatar/${post.userPostData.avatar}`}
										alt=""
										className="w-full h-full object-cover"
									/>
								</Link>
							</div>
							<div className="flex flex-col justify-stretch">
								<span className="name text-base font-medium">{post.userPostData.username}</span>
								<p className="text-sm leading-4 text-gray-600">{timeAgo}</p>
								<p className="text-[12px] leading-4 text-gray-600">#{post.id}</p>
							</div>
						</div>
						{
							localStorage.getItem("auth") != "false" && (state.user) && (state.user.user.id != post.userPostData.id) && (
								<button
									type="button"
									onClick={handleVisibleMenuPost}
									className="w-10 h-10 hover:bg-gray-100 transition-all rounded-full flex justify-center items-center">
									<BiDotsVerticalRounded size={22} />
								</button>
							)
						}
						{isVisibleMenuPost && (
							<div ref={modalRef} className="w-44 h-fit bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute top-14 right-5 rounded-md overflow-hidden">
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
				</div>
			</motion.div>
			<AnimatePresence mode="wait">
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
