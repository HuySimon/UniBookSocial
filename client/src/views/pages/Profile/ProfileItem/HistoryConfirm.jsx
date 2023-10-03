import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiSearch2Line } from 'react-icons/ri'
import { PiUserCircleLight } from 'react-icons/pi'
import { Avatar, LoginImg } from '../../../../assets'
const HistoryConfirm = () => {
	const menu = ["All", "Confirm", "Completed"]
	const [activeButton, setActiveButton] = useState(0)
	return (
		<div className='flex flex-col gap-3'>
			<div className="flex w-full justify-between items-start bg-gray-100 border-b-[3px] border-black/40">
				{
					menu.map((item, index) => (
						<div
							key={index}
							onClick={() => setActiveButton(index)}
							className={`relative w-full py-3 flex-1 cursor-pointer text-center font-medium ${activeButton === index && "text-primary-main"}`}>
							<button
								type='button'
								className='text-lg'>{item}</button>
							{activeButton === index && (
								<motion.div
									layoutId='active-button'
									className='absolute w-full h-[3px] bg-primary-main -bottom-[3px]' />
							)}
						</div>
					))
				}
			</div>
			<div className="flex gap-3 items-center w-full border border-gray-400 p-2 rounded-sm">
				<RiSearch2Line size={28} className='text-gray-400' />
				<input type="text" name="" id="" className='border-none w-full focus:outline-none text-black placeholder:text-sm' placeholder='You can search by anything....' />
			</div>
			<div className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm">
				<div className="w-full flex flex-row justify-between items-center">
					<div className="flex gap-3 items-center">
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={Avatar} alt="" className='w-full h-full object-cover' />
						</div>
						<span className="name font-medium text-lg">
							John Doe
						</span>
						<Link className="p-1 border text-sm flex items-center text-gray-700">
							<PiUserCircleLight size={18} />
							<span className='inline-block ml-1'>View Profile</span>
						</Link>
					</div>
					<span className="status uppercase text-base font-semibold !leading-7 text-primary-900">confirmed</span>
				</div>
				<div className="my-1">
					<div className="w-full flex justify-between items-center border-y border-gray-400">
						<div className="flex flex-[4] py-4">
							<div className="w-32 h-32">
								<img src={LoginImg} alt="" className='w-full h-full object-cover' />
							</div>
							<div className="flex flex-col gap-2 text-sm ml-3">
								<p className='text-base	'>Everybody is a Genius. But If You Judge a Fish by Its Ability to Climb a Tree</p>
								<p><span className='font-semibold'>Major:</span> Information Technology</p>
							</div>
						</div>
						<div className="flex-1 text-right">
							<span className='text-primary-main font-medium'>₫45.000</span>
						</div>
					</div>
					<div className="flex justify-end items-center p-5">
						<p>Order Total: <span className='text-2xl text-primary-main'>₫45.000</span></p>
					</div>
					<div className="flex justify-end items-center gap-5">
						<button className='w-fit px-5 py-2 bg-primary-main text-white rounded-sm hover:bg-primary-700 transition-all'>
							Order Received
						</button>
						<button className='w-fit px-5 py-2 border border-primary-main text-primary-main rounded-sm'>
							Cancel Order
						</button>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm">
				<div className="w-full flex flex-row justify-between items-center">
					<div className="flex gap-3 items-center">
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={Avatar} alt="" className='w-full h-full object-cover' />
						</div>
						<span className="name font-medium text-lg">
							John Doe
						</span>
						<Link className="p-1 border text-sm flex items-center text-gray-700">
							<PiUserCircleLight size={18} />
							<span className='inline-block ml-1'>View Profile</span>
						</Link>
					</div>
					<span className="status uppercase text-base font-semibold !leading-7 text-primary-900">completed</span>
				</div>
				<div className="my-1">
					<div className="w-full flex justify-between items-center border-y border-gray-400">
						<div className="flex flex-[4] py-4">
							<div className="w-32 h-32">
								<img src={LoginImg} alt="" className='w-full h-full object-cover' />
							</div>
							<div className="flex flex-col gap-2 text-sm ml-3">
								<p className='text-base	'>Everybody is a Genius. But If You Judge a Fish by Its Ability to Climb a Tree</p>
								<p><span className='font-semibold'>Major:</span> Information Technology</p>
							</div>
						</div>
						<div className="flex-1 text-right">
							<span className='text-primary-main font-medium'>₫45.000</span>
						</div>
					</div>
					<div className="flex justify-end items-center p-5">
						<p>Order Total: <span className='text-2xl text-primary-main'>₫45.000</span></p>
					</div>
					<div className="flex justify-end items-center gap-5">
						<button className='w-fit px-5 py-2 bg-primary-main text-white rounded-sm hover:bg-primary-700 transition-all'>
							Review
						</button>
					</div>
				</div>
			</div>
		</div >
	)
}

export default HistoryConfirm