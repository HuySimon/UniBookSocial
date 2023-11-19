import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NotifyAppear } from './animation';
import Curve from './Curve';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import {
	PiWarningLight,
	PiWarningCircleLight,
	PiXCircleLight,
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
	useEffect(() => {
		setDataNotify(stateNotify.notifications)
	})
	const menu = [
		{
			name: "Unread",
		},
		{
			name: "All"
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
				<div className="w-[330px] h-full bg-white">
					<div className="py-5 border-b">
						<div className="flex flex-col">
							<span className='text-3xl font-medium ml-5'>Notification</span>
							<HiOutlineBellAlert size={60} className='text-center w-full mt-4' />
							<p className='w-full text-center mt-4 mb-2'>Activity on your post</p>
							<p className='w-full text-center px-10 text-sm'>
								When someone wants to buy your product, you’ll see it here.
							</p>
						</div>
					</div>
					<div className="w-full flex justify-between items-center">
						{
							menu.map((item, index) => (
								<button
									onClick={() => setType(item.name)}
									className={`w-full h-full py-3 border-b text-center font-medium transition-all ${item.name === type && 'bg-primary-main text-white'} ${index == 0 && 'border-r'} relative`}>
									{item.name}
								</button>
							))
						}
					</div>
					<div className={`notifications flex flex-col h-full overflow-y-scroll`}>
						{dataNotify &&
							dataNotify
								.filter((item) => item.userReceive === user.user.id)
								.map((item, index) => (
									<div key={index} className={`w-full flex justify-center items-center border-b py-3`}>
										{item.typeNoti === 'Confirm' ? (
											<PiWarningLight size={45} color='green' className='w-1/4' />
										) : item.typeNoti === 'Violation' ? (
											<PiXCircleLight size={45} color='red' className='w-1/4' />
										) : (
											<PiWarningCircleLight size={45} color='red' className='w-1/4' />
										)}
										<div className={`w-3/4 flex flex-col justify-between`}>
											<span className='text-lg font-medium'>{item.typeNoti}</span>
											{
												notifySend.map((notiItem, notiIndex) => (
													// Check if item.typeNoti === notiItem.type
													item.typeNoti === notiItem.type && (
														<p className='text-sm text-gray-400' key={notiIndex}>{notiItem.content} người dùng có ID {item.userSend}</p>
													)
												))
											}
										</div>
									</div>
								))}
					</div>
				</div>
				{/* <Curve /> */}
			</motion.div>
			{/* <div onClick={() => handleNotify(false)} className="fixed inset-0 m-auto w-screen h-screen bg-transparent" /> */}
		</>
	);
};

export default Index;
