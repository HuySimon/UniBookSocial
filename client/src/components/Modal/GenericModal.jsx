import React from 'react';
import { motion } from 'framer-motion'; import { GoAlertFill, GoCheckCircleFill, GoX } from 'react-icons/go';
import { TbTruckDelivery } from "react-icons/tb";
const GenericModal = ({
	postID = 0,
	alterType = "",
	actionType,
	setIsVisibleModal,
	confirmAction,
}) => {
	return (
		<>
			<motion.div
				initial={{
					top: '-10%',
					opacity: 0,
				}}
				animate={{
					top: '20px',
					opacity: 1,
					transition: {
						duration: 0.25,
						type: 'spring',
					},
				}}
				className='fixed top-5 left-0 right-0 m-auto bg-white w-1/4 shadow-md rounded-md z-20'
			>
				<div className='p-5'>
					<div className='flex flex-col items-center'>
						{/* Adjust icon and text based on actionType */}
						{actionType[0] === 'Confirm' ? (
							<GoCheckCircleFill size={60} className='text-blue-600 mb-3' />
						) : actionType[0] === 'Unconfirmed' ? (
							/* Use delete icon or any other suitable icon */
							<GoAlertFill size={60} className='text-red-600 mb-3' />
						) : actionType[0] === 'Delivered' ? (
							<TbTruckDelivery size={60} className='text-green-600 mb-3'
								style={{ path: { stroke: '#ffffff' } }} />
						) : alterType === 'CheckPost' && (
							<GoAlertFill size={60} className='text-red-600 mb-3' />
						)}
						{/* Adjust text based on actionType */}
						<p className='font-medium text-center'>
							{actionType[0] === 'Confirm'
								? 'Are you sure you want to confirm this order?'
								: actionType[0] === 'Unconfirmed' && alterType !== 'CheckPost' ?
									'Are you sure you want to cancel this order?'
									: actionType[0] === 'Delivered' ?
										'Received your order?'
										: actionType[0] === 'Unconfirmed' && alterType === 'CheckPost' && 'Are you sure this post isn\'t violated?'}
						</p>
						<p className='text-sm'>
							This action cannot be undone
						</p>
					</div>
					<div className='flex w-full justify-between items-center gap-2 mt-5'>
						<button
							type='button'
							onClick={() => setIsVisibleModal(false)}
							className='w-full p-2 bg-gray-400 rounded-md text-white'
						>
							Cancel
						</button>
						<button
							type='submit'
							onClick={() => {
								const args = postID === 0
									? [actionType[0], actionType[1]]
									: [postID, actionType[0], actionType[1]];

								confirmAction(...args);
							}}
							className={`w-full p-2 ${actionType[0] === "Confirm" ? 'bg-blue-600 hover:bg-blue-500' : actionType[0] === "Unconfirmed" ? 'bg-red-600 hover:bg-red-500' : 'bg-green-600 hover:bg-green-500'} rounded-md text-white  transition-all`}
						>
							{
								actionType[0] === "Delivered" ? "Received" : "Submit"
							}
						</button>
					</div>
				</div>
				{/* Use close icon or any other suitable icon */}
				<GoX
					className='absolute top-2 right-2 cursor-pointer'
					size={22}
					onClick={() => setIsVisibleModal(false)}
				/>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1,
					transition: {
						duration: 0.2
					}
				}}
				onClick={() => setIsVisibleModal(false)}
				className="fixed top-0 left-0 w-screen h-screen bg-black/30 z-10"></motion.div>
		</>
	);
};

export default GenericModal
