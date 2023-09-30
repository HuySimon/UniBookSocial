import React from 'react'
import { motion } from 'framer-motion'
import { NotifyAppear } from './animation'
import Curve from './Curve'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { PiWarningLight, PiWarningCircleLight, PiXCircleLight } from 'react-icons/pi'
const Index = ({ isVisibleNotify, handleNotify, setActiveOverlay }) => {

	const notifyTemplate = [
		{
			icon: PiWarningLight,
			color: "green",
			title: "Confirm Notifications",
			description: "Your post had been confirmed by John Doe"
		},
		{
			icon: PiXCircleLight,
			color: "red",
			title: "Violate Notifications",
			description: "Your article violates the plus standard"
		},
		{
			icon: PiWarningCircleLight,
			color: "red",
			title: "Reject Notifications",
			description: "Your post had been confirmed by John Doe"
		},
	]

	return (
		<>
			<motion.div
				variants={NotifyAppear}
				initial="initial"
				animate={isVisibleNotify && "open"}
				exit={"close"}
				className='h-screen fixed top-0 left-[250px] shadow-[4px_0_24px_rgba(0,0,0,0.15)] border-r border-gray-300'>
				<div className="w-[350px] h-full bg-white">
					<div className="py-5 border-b">
						<div className="flex flex-col">
							<span className='text-3xl font-medium ml-5'>Notification</span>
							<HiOutlineBellAlert size={60} className='text-center w-full mt-4' />
							<p className='w-full text-center mt-4 mb-2'>Activity on your post</p>
							<p className='w-full text-center px-10 text-sm'>When someone wants to buy your product,you’ll see it here.</p>
						</div>
					</div>
					<div className="flex flex-col">
						{
							notifyTemplate.map((item, index) => (
								<div className={`w-full flex justify-center items-center border-b py-2`}>
									<item.icon size={40} color={item.color} className='w-1/4' />
									<div className={`w-3/4 flex flex-col justify-between`}>
										<span className='text-lg font-medium'>{item.title}</span>
										<p className='text-sm text-gray-500 pr-7'>{item.description}</p>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<Curve />
			</motion.div>
		</>
	)
}

export default Index