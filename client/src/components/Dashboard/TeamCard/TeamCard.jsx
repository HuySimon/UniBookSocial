import React from 'react'
import { LoginImg } from '../../../assets'
import { FaFacebook, FaGithubAlt, FaLinkedinIn, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const TeamCard = ({ data }) => {
	return (
		<div className='w-[280px] h-fit border border-gray-200 rounded-md shadow-md'>
			<div className="p-5 flex flex-col gap-2 mb-6">
				<div className="w-36 h-36 mx-auto">
					<img src={data.image} alt="" className='w-full h-full object-cover object-center rounded-full' />
				</div>
				<p className='text-center font-medium text-lg '>{data.name}</p>
				<p className='text-center font-medium text-gray-500 text-sm'>{data.email}</p>
			</div>
			<div className="w-full h-fit flex justify-between items-center bg-gray-400 hover:bg-primary-main transition-all px-5 py-4 rounded-b-md">
				<Link to={data.facebook}>
					<FaFacebook size={28} className='text-white' />
				</Link>
				<Link to={data.facebook}>
					<FaGithubAlt size={32} className='text-white' />
				</Link>
				<Link to={data.facebook}>
					<FaLinkedinIn size={28} className='text-white' />
				</Link>
				<Link to={data.facebook}>
					<FaInstagram size={28} className='text-white' />
				</Link>
				{/* {
					data.map((item,index) => (
						<Link to={item.href}>
							<item.icon size={item.size} className='text-white' />
						</Link>
					))
				} */}
			</div>
		</div>
	)
}

export default TeamCard