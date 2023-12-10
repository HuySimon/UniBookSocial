import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { NotifyAppear } from './animation';
import { GiConfirmed, GiCancel } from "react-icons/gi";
import { HiOutlineBellAlert } from 'react-icons/hi2';
import {
	PiWarningBold,
} from 'react-icons/pi';
import { toast } from 'react-toastify';
import Axios from '../../api/index';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNotificationContext } from '../../hooks/useNotificationContext';
import { useNavigate } from 'react-router-dom';

const Index = ({ isVisibleNotify, handleNotify }) => {
	const [dataNotify, setDataNotify] = useState(null);
	const [type, setType] = useState("Unread");
	const [state, dispatch] = useAuthContext();
	const [stateNotify, dispatchNotify] = useNotificationContext()
	const { isAuthorized, user } = state;
	const navigate = useNavigate()
	const calculateTimeAgo = (createdAt) => {
		const now = new Date();
		const created = new Date(createdAt);
		const timeDifference = now - created;
		const seconds = Math.floor(timeDifference / 1000);

		if (seconds < 60) {
			return `${seconds} seconds ago`;
		} else if (seconds < 3600) {
			const minutes = Math.floor(seconds / 60);
			return `${minutes} minutes ago`;
		} else if (seconds < 86400) {
			const hours = Math.floor(seconds / 3600);
			return `${hours} hours ago`;
		} else {
			const days = Math.floor(seconds / 86400);
			return `${days} days ago`;
		}
	};
	const getNotifications = async (isSeen) => {
		dispatchNotify({ type: "TYPE_LOADING", value: true })
		let url = `/api/v1/notifications&include=postData,userSendData&sort=-createdAt`
		try {
			if (type === "Unread") {
				url = `/api/v1/notifications?filter=(equals(isSeen,'false'))&include=postData,userSendData&sort=-createdAt`
			} else {
				url = `/api/v1/notifications?filter=(equals(isSeen,'true'))&include=postData,userSendData&sort=-createdAt`
			}
			const res = await Axios.get(url)
			if (res.status === 200) {
				setDataNotify(res.data.data.data)
				dispatchNotify({ type: "TYPE_LOADING", value: false })
				// console.log(res)
			}
		} catch (error) {
			console.log(error)
			dispatchNotify({ type: "TYPE_LOADING", value: false })

		}
	}
	const updateNotifications = async (id, value) => {
		try {
			const res = await Axios.patch(`/api/v1/notifications/${id}`, {
				isSeen: value
			})
			if (res.status === 200) {
				toast.success("Update notifications successfully")
			}
		} catch (error) {
			console.log(error)
		}
	}
	const handleChange = (e, id) => {
		let isChecked = e.target.checked;
		if (isChecked) {
			updateNotifications(id, true)
		} else {
			updateNotifications(id, false)
		}
	}
	const modalRef = useRef(null);
	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			handleNotify(false)
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	useEffect(() => {
		getNotifications(false)
		setDataNotify(stateNotify.notifications)
	}, [type])
	const menu = [
		{
			name: "Unread",
			isSeen: false,
		},
		{
			name: "Read",
			isSeen: true
		}
	]
	const notifySend = [
		{
			type: "Confirmed",
			content: `Bài đăng title được xác nhận bởi username`
		},
		{
			type: "Unconfirmed",
			content: `The post 'title' is rejected by username`
		},
		{
			type: "Checking",
			content: "Your post 'title' got reported",
		},
		{
			type: "Violated",
			content: "Violated content reports: content"
		},{
			type: "Clear",
			content: "Congratulations! Your post is cleared of any violations."
		}
	]
	return (
		<>
			<motion.div
				ref={modalRef}
				variants={NotifyAppear}
				initial="initial"
				animate={isVisibleNotify && 'open'}
				exit="close"
				className='h-screen fixed top-0 left-[250px] shadow-[4px_0_24px_rgba(0,0,0,0.15)] border-r border-gray-300 z-[1]'>
				<div className="w-[330px] flex flex-col h-full bg-white">
					<div className="py-5 border-b">
						<div className="w-full flex items-center">
							<span className='text-3xl font-medium ml-5'>Notification</span>
							<HiOutlineBellAlert size={40} className='text-center w-full' />
						</div>
					</div>
					<div className="w-full flex justify-between items-center">
						{
							menu.map((item, index) => (
								<button
									key={index}
									onClick={() => {
										setType(item.name)
									}}
									className={`w-full h-full py-3 border-b text-center font-medium transition-all ${item.name === type && 'bg-primary-main text-white'} ${index == 0 && 'border-r'} relative`}>
									{item.name}
								</button>
							))
						}
					</div>
					<div className={`flex flex-col h-full overflow-y-scroll`}>
						{
							stateNotify.isLoadingType ? (
								<div className=""></div>
							) : (
								dataNotify &&
								dataNotify
									.filter((item) => item.userReceive === user.user.id)
									.map((item, index) => (
										<div className="flex items-center border-b">
											<div
												onClick={() => { navigate(`/detailPost/${item.post}`) }}
												key={index} className={`w-full flex items-center py-2 cursor-pointer transition-all bg-transparent hover:bg-gray-100`}>
												{item.typeNoti === 'Confirmed' ? (
													<GiConfirmed size={52} color='green' className='w-1/4' />
												) : item.typeNoti === 'Violation' ? (
													<PiWarningBold size={52} color='red' className='w-1/4' />
												) : (
													<GiCancel size={52} color='red' className='w-1/4' />
												)}
												<div className={`w-3/4 flex flex-col justify-between`}>
													<div className="w-full flex justify-between items-center mb-1">
														<span className='text-lg font-medium'>{item.typeNoti}</span>
														<span className='text-sm text-gray-500'>
															<i>
																{calculateTimeAgo(item.createdAt)}
															</i>
														</span>
													</div>
													{
														notifySend.map((notiItem, notiIndex) => (
															// Check if item.typeNoti === notiItem.type
															item.typeNoti === notiItem.type && (
																<p className='text-sm text-gray-500' key={notiIndex} dangerouslySetInnerHTML={{
																	__html: notiItem.content
																		.replace("title", `<i class="text-black/70">' ${item.postData.title} '</i>`)
																		.replace("username", `<i class="font-medium text-black/70">${item.userSendData.username}</i>`)
																		.replace("content",`<i class="text-black>${item.content}</i>`)
																}}></p>
															)
														))
													}
												</div>
											</div>
											{item.isSeen === false && (<input type="checkbox" className='w-4 h-4 ml-1' onChange={(e) => handleChange(e, item.id)} />)}
										</div>
									))
							)
						}
					</div>
				</div>
				{/* <Curve /> */}
			</motion.div>
		</>
	);
};

export default Index;
