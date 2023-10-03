import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { AiFillStar,AiOutlineGlobal } from 'react-icons/ai'
import { Avatar } from '../../../../assets'
import { Link } from 'react-router-dom'
const Review = () => {
	return (
		<div className='flex flex-col gap-3 lg:mt-0 mt-[66px]'>
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
						<div className="flex flex-col items-start">
							<span className="name font-medium text-lg">
								John Doe
							</span>
							<div className='flex justify-start'>
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
							</div>
						</div>
					</div>
					<Link className="p-1 border text-sm flex items-center text-gray-700">
						<AiOutlineGlobal size={18} />
						<span className='inline-block ml-1'>View Post</span>
					</Link>
				</div>
				<div className="flex p-2 border border-gray-400 rounded-sm">
					<p>Because of this intense weather, it led to cancellations and for events to be postponed but it's not stopping many people from lining up to get into the bars. </p>
				</div>
			</div>
			<div className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm">
				<div className="w-full flex flex-row justify-between items-center">
					<div className="flex gap-3 items-center">
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={Avatar} alt="" className='w-full h-full object-cover' />
						</div>
						<div className="flex flex-col items-start">
							<span className="name font-medium text-lg">
								John Doe
							</span>
							<div className='flex justify-start'>
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
							</div>
						</div>
					</div>
					<Link className="p-1 border text-sm flex items-center text-gray-700">
						<AiOutlineGlobal size={18} />
						<span className='inline-block ml-1'>View Post</span>
					</Link>
				</div>
				<div className="flex p-2 border border-gray-400 rounded-sm">
					<p>Because of this intense weather, it led to cancellations and for events to be postponed but it's not stopping many people from lining up to get into the bars. </p>
				</div>
			</div>
			<div className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm">
				<div className="w-full flex flex-row justify-between items-center">
					<div className="flex gap-3 items-center">
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={Avatar} alt="" className='w-full h-full object-cover' />
						</div>
						<div className="flex flex-col items-start">
							<span className="name font-medium text-lg">
								John Doe
							</span>
							<div className='flex justify-start'>
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
							</div>
						</div>
					</div>
					<Link className="p-1 border text-sm flex items-center text-gray-700">
						<AiOutlineGlobal size={18} />
						<span className='inline-block ml-1'>View Post</span>
					</Link>
				</div>
				<div className="flex p-2 border border-gray-400 rounded-sm">
					<p>Because of this intense weather, it led to cancellations and for events to be postponed but it's not stopping many people from lining up to get into the bars. </p>
				</div>
			</div>
			<div className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm">
				<div className="w-full flex flex-row justify-between items-center">
					<div className="flex gap-3 items-center">
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={Avatar} alt="" className='w-full h-full object-cover' />
						</div>
						<div className="flex flex-col items-start">
							<span className="name font-medium text-lg">
								John Doe
							</span>
							<div className='flex justify-start'>
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
								<AiFillStar className='text-yellow-500' size={14} />
							</div>
						</div>
					</div>
					<Link className="p-1 border text-sm flex items-center text-gray-700">
						<AiOutlineGlobal size={18} />
						<span className='inline-block ml-1'>View Post</span>
					</Link>
				</div>
				<div className="flex p-2 border border-gray-400 rounded-sm">
					<p>Because of this intense weather, it led to cancellations and for events to be postponed but it's not stopping many people from lining up to get into the bars. </p>
				</div>
			</div>
		</div>
	)
}

export default Review