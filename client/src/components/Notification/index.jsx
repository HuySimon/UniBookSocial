import React, { useEffect, useState } from 'react';
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

const Index = ({ isVisibleNotify, handleNotify }) => {
	const [dataNotify, setDataNotify] = useState(null);
	const [type, setType] = useState("Unread");
	const [state, dispatch] = useAuthContext();
	const [stateNotify, dispatchNotify] = useNotificationContext()
	const { isAuthorized, user } = state;

	const getNotifications = async (isSeen) => {
		let url = `/api/v1/notifications`
		try {
			if (type === "Unread") {
				url = `/api/v1/notifications?filter=(equals(isSeen,'false'))`
			} else {
				url = `/api/v1/notifications?filter=(equals(isSeen,'true'))`
			}
			const res = await Axios.get(url)
			if (res.status === 200) {
				setDataNotify(res.data.data.data)
				// console.log(res)
			}
		} catch (error) {
			console.log(error)
		}
	}
	const updateNotifications = async (id) => {
		try {
			const res = await Axios.patch(`/api/v1/notifications/${id}`, {
				isSeen: true
			})
			if (res.status === 200) {
				toast.success("Update notifications successfully")
			}
		} catch (error) {
			console.log(error)
		}
	}
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
			type: "Confirm",
			content: `Bài đăng được xác nhận bởi`
		},
		{
			type: "Unconfirmed",
			content: `Bài đăng bị hủy xác nhận bởi`
		},
		{
			type: "Checkpost",
			content: "Bài đăng của bạn bị báo cáo",
		},
		{
			type: "Violation",
			content: "Chúng tôi đã gỡ bài đăng của bạn do có vi phạm"
		}
	]
	return (
		<>
			<motion.div
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
						{dataNotify &&
							dataNotify
								.filter((item) => item.userReceive === user.user.id)
								.map((item, index) => (
									<div key={index} className={`w-full flex items-center border-b py-2`}>
										{item.typeNoti === 'Confirm' ? (
											<GiConfirmed size={45} color='green' className='w-1/4' />
										) : item.typeNoti === 'Violation' ? (
											<PiWarningBold size={45} color='red' className='w-1/4' />
										) : (
											<GiCancel size={45} color='red' className='w-1/4' />
										)}
										<div className={`w-3/4 flex flex-col justify-between`}>
											<span className='text-lg font-medium'>{item.typeNoti}</span>
											{
												notifySend.map((notiItem, notiIndex) => (
													// Check if item.typeNoti === notiItem.type
													item.typeNoti === notiItem.type && (
														<p className='text-sm text-gray-400' key={notiIndex}>{notiItem.content} người dùng có ID {index}</p>
													)
												))
											}
										</div>
										{ item.isSeen === false && ( <input type="checkbox" className='w-4 h-4' onClick={() => updateNotifications(item.id)} /> )}
									</div>
								))}
					</div>
				</div>
				{/* <Curve /> */}
			</motion.div>
			<div onClick={() => handleNotify(false)} className="fixed inset-0 m-auto w-screen h-screen bg-transparent" />
		</>
	);
};

export default Index;
