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

const Index = ({ isVisibleNotify, handleNotify }) => {
	const [dataNotify, setDataNotify] = useState(null);
	const [state, dispatch] = useAuthContext();
	const { isAuthorized, user } = state;
	const isLoading = !!dataNotify;

	const getNotify = useCallback(async () => {
		try {
			const res = await Axios.get('/api/v1/notifications');
			if (res.status === 200) {
				setDataNotify(res.data.data.data);
			}
		} catch (err) {
			toast.error(err);
		}
	}, []);

	useEffect(() => {
		getNotify();
	}, [getNotify, isLoading]);
	// console.log(result)
	return (
		<>
			<motion.div
				variants={NotifyAppear}
				initial="initial"
				animate={isVisibleNotify && 'open'}
				exit="close"
				className='h-screen fixed top-0 left-[250px] shadow-[4px_0_24px_rgba(0,0,0,0.15)] border-r border-gray-300 z-[9]'>
				<div className="w-[350px] h-full bg-white">
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
					<div className="flex flex-col">
						{dataNotify &&
							dataNotify
								.filter((item) => item.userReceive === user.user.id)
								.map((item, index) => (
									<div key={index} className={`w-full flex justify-center items-center border-b py-3`}>
										{item.typeNoti === 'Confirm' ? (
											<PiWarningLight size={50} color='green' className='w-1/4' />
										) : item.typeNoti === 'Violation' ? (
											<PiXCircleLight size={50} color='red' className='w-1/4' />
										) : (
											<PiWarningCircleLight size={50} color='red' className='w-1/4' />
										)}
										<div className={`w-3/4 flex flex-col justify-between`}>
											<span className='text-lg font-medium'>{item.typeNoti}</span>
											<p className='text-sm text-gray-500 pr-7'>{item.content}</p>
										</div>
									</div>
								))}
					</div>
				</div>
				<Curve />
			</motion.div>
			<div onClick={() => handleNotify(false)} className="fixed inset-0 m-auto w-screen h-screen bg-transparent" />
		</>
	);
};

export default Index;
