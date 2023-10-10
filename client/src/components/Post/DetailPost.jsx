import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Avatar, PlaceHolderPostImg } from '../../assets'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const DetailPost = () => {

	return (
		<div className='flex w-full h-screen'>
			<div className="bg-primary-main flex-[2_1_auto] py-20 px-10">
				<div className="main-img w-full h-[85%]">
					<img src={PlaceHolderPostImg} alt="" className='w-full h-full object-contain object-center rounded-md' />
				</div>
			</div>
			<div className="w-full flex flex-col bg-white flex-1 p-5">
				<div className="w-full flex justify-between items-center">
					<div className="flex gap-3">
						<div className="w-14 h-14 rounded-full overflow-hidden">
							<img src={Avatar} alt="" className='w-full h-full object-cover' />
						</div>
						<div className="flex flex-col justify-start">
							<span className="name font-medium">
								John Doe
							</span>
							<p className='text-[10px] leading-4 text-gray-600'>2 seconds ago</p>
						</div>
					</div>
					<button className='w-10 h-10 hover:bg-gray-100 transition-all rounded-full flex justify-center items-center'>
						<BiDotsVerticalRounded size={22} />
					</button>
				</div>
				<table className='flex border border-gray-500 rounded-lg my-4'>
					<thead className='flex flex-col border-r w-1/2 border-gray-500'>
						<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
							<th>Name</th>
						</tr>
						<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
							<th>Price</th>
						</tr>
						<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
							<th>Major</th>
						</tr>
						<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
							<th>Type</th>
						</tr>
						<tr className='p-2 font-medium text-sm'>
							<th>Description</th>
						</tr>
					</thead>
					<tbody className='flex flex-col w-1/2 xl:w-4/5'>
						<tr className='p-2 text-sm'>
							<td>John Doe</td>
						</tr>
						<tr className='p-2 border-t border-gray-500 text-sm'>
							<td>45000</td>
						</tr>
						<tr className='p-2 border-t border-gray-500 text-sm'>
							<td>General Subject</td>
						</tr>
						<tr className='p-2 border-t border-gray-500 text-sm'>
							<td>Old</td>
						</tr>
						<tr className='p-2 border-t border-gray-500 text-sm'>
							<td>
								Yesterday with @Jack Phat and @My instagram at concert in LA.
								Was totally fantastic! People were really excited about this one!
							</td>
						</tr>
					</tbody>
				</table>
				<table className='flex border border-gray-500 rounded-lg my-4'>
					<thead className='flex flex-col border-r w-1/2 border-gray-500'>
						<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
							<th>Name</th>
						</tr>
						<tr className='border-b p-2 border-gray-500 font-medium text-sm'>
							<th>Price</th>
						</tr>
						<tr className='p-2 font-medium text-sm'>
							<th>Major</th>
						</tr>
					</thead>
					<tbody className='flex flex-col w-1/2 xl:w-4/5'>
						<tr className='p-2 text-sm'>
							<td>John Doe</td>
						</tr>
						<tr className='p-2 border-t border-gray-500 text-sm'>
							<td>45000</td>
						</tr>
						<tr className='p-2 border-t border-gray-500 text-sm'>
							<td>General Subject</td>
						</tr>
					</tbody>
				</table>
				<button type="submit" className='px-10 py-2 bg-primary-main text-white w-fit rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all'>Buy</button>
			</div>
			<div className=" p-2 flex-[0_0_auto] flex justify-center items-start bg-primary-700">
				<button type='button' onClick={() => window.history.back()}>
					<AiOutlineClose size={22} color='#fff' className='cursor-pointer' />
				</button>
			</div>
		</div>
	)
}

export default DetailPost