import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiSearch2Line } from 'react-icons/ri'
import { PiUserCircleLight } from 'react-icons/pi'
import { Avatar } from '../../../../assets'
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
			<div className="flex gap-3 items-center w-full border border-gray-400 p-2">
				<RiSearch2Line size={28} className='text-gray-400' />
				<input type="text" name="" id="" className='border-none w-full focus:outline-none text-black placeholder:text-sm' placeholder='You can search by anything....' />
			</div>
			<div className="w-full flex flex-col gap-3 border p-5">
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
			</div>
		</div >
	)
}

export default HistoryConfirm