import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useHeaderContext } from '../../hooks/useHeaderContext';
import Axios from '../../api/index'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNotificationContext } from '../../hooks/useNotificationContext';

const SideBarItem = ({ title, href, index, activeOverlay, setActiveOverlay, expand, icon, handleCreate, target }) => {
	const { stateHeader, dispatchHeader } = useHeaderContext()
	const [state, dispatch] = useAuthContext()
	const [stateNotify, dispatchNotify] = useNotificationContext()
	const [quantity, setQuantity] = useState(0)
	const getUnreadNotifications = async () => {
		try {
			const res = await Axios.get(`/api/v1/notifications?filter=and(equals(userReceive,'${state.user.user.id}'),equals(isSeen,'false'))`)
			if (res.status === 200) {
				console.log(res)
				setQuantity(res.data.data.data.length)
			}
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getUnreadNotifications()
	}, [stateNotify.isUpdateType])
	console.log(quantity)
	return (
		<li
			onClick={() => {
				setActiveOverlay(title);
			}}
			className='px-2 md:px-4 pb-4 flex items-center font-semibold relative'>
			<Link
				to={href}
				target={target}
				onClick={() => {
					handleCreate();
				}}
				className={`
                        relative
                        flex items-center w-full h-12 transition-all hover:text-primary-main
                        pl-2 py-3 group
                        hover:bg-black/10 rounded-md
                        ${stateHeader.activeButton === title ? "text-primary-main bg-black/10" : "text-black"}
                    `}
			>
				{icon}
				<span className={`ml-2 overflow-hidden z-10 ${expand ? "w-44" : "w-0"}`}>{title}</span>
				{stateHeader.activeButton === title && (
					<motion.div
						layoutId='overlay-button'
						className="absolute -left-4 w-1 h-3/4 bg-primary-main rounded-lg">
					</motion.div>
				)}
				{!expand && (
					<div
						className={`
                                absolute left-full rounded-md px-2 py-1 ml-6
                                bg-primary-main text-white text-sm
                                invisible opacity-20 -translate-x-3 transition-all
                                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                            `}
					>
						{title}
					</div>
				)}
				{
					title === "Notification" && (
						<span className='absolute w-7 h-7 flex justify-center items-center text-white rounded-full p-2 bg-primary-main -top-2 -right-1'>{quantity}</span>
					)
				}
			</Link>
		</li>
	);
};

export default SideBarItem;
