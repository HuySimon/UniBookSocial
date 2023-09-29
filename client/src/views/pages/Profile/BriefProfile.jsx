import React from 'react'
import { LoginImg, Portrait } from '../../../assets'
import { Link } from 'react-router-dom'

const BriefProfile = () => {
	return (
		<div className='w-fit h-fit'>
			<div className="hidden lg:block w-[300px] rounded-lg overflow-hidden border border-gray-400 relative shadow-md">
				<div className="w-full h-[200px]">
					<img src={LoginImg} alt="" className='w-full h-full object-cover' />
				</div>
				<div className="w-28 h-28 rounded-full overflow-hidden absolute left-0 right-0 top-[14vh] mx-auto">
					<img src={Portrait} alt="" className='w-full h-full object-cover' />
				</div>
				<div className="flex flex-col text-center mt-14 pb-3 border-b border-gray-500">
					<p className='font-medium text-xl'>John Doe</p>
					<p className='text-sm text-gray-500 px-16'>Freelance Desginer and Front-end Developer</p>
				</div>
				<div className="flex flex-col">
					<div className="flex justify-between items-center gap-3 px-4 py-3 border-b border-gray-500">
						<span className='font-medium'>Phone</span>
						<span className='text-gray-600'>0123456789</span>
					</div>
					<div className="flex justify-between items-center gap-3 px-4 py-3 border-b border-gray-500">
						<span className='font-medium'>Email</span>
						<span className='text-gray-600'>john.doe@gmail.com</span>
					</div>
					<div className="flex justify-between items-center gap-3 px-4 py-3">
						<span className='font-medium'>Facebook</span>
						<Link
						to={"https://www.facebook.com/jack.willam2003"}
						target='_blank'
						>
							<span className='text-gray-600'>
								Jack Phat
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BriefProfile