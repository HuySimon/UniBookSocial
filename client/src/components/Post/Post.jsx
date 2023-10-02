import React from 'react'
import { Avatar, LoginImg } from '../../assets'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { PlaceHolderPostImg } from '../../assets'
import { Link } from 'react-router-dom'
const Post = () => {
	return (
		<div className='w-full h-fit px-6 py-5 border border-gray-400 shadow-md rounded-lg'>
			<div className="w-full flex flex-col">
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
				<div className="w-full h-[30vh] xl:h-[40vh] overflow-hidden rounded-lg border border-gray-500 mt-4">
					<Link>
						<img src={PlaceHolderPostImg} alt="" className='w-full h-full object-contain' />
					</Link>
				</div>
				<table className='flex border border-gray-500 rounded-lg my-4'>
					<thead className='flex flex-col border-r w-1/2 xl:w-1/5 border-gray-500'>
						<th className='border-b p-2 border-gray-500 font-medium text-sm'>Name</th>
						<th className='border-b p-2 border-gray-500 font-medium text-sm'>Price</th>
						<th className='border-b p-2 border-gray-500 font-medium text-sm'>Major</th>
						<th className='border-b p-2 border-gray-500 font-medium text-sm'>Type</th>
						<th className='p-2 font-medium text-sm'>Description</th>
					</thead>
					<tbody className='flex flex-col w-1/2 xl:w-4/5'>
						<td className='p-2 text-sm'>John Doe</td>
						<td className='p-2 border-t border-gray-500 text-sm'>45000</td>
						<td className='p-2 border-t border-gray-500 text-sm'>General Subject</td>
						<td className='p-2 border-t border-gray-500 text-sm'>Old</td>
						<td className='p-2 border-t border-gray-500 text-sm'>
							Yesterday with @Jack Phat and @My instagram at concert in LA. 
							Was totally fantastic! People were really excited about this one!
						</td>
					</tbody>
				</table>
				<button type="submit" className='px-10 py-2 bg-primary-main text-white w-fit rounded-lg hover:shadow !shadow-primary-700 hover:bg-primary-700 transition-all'>Buy</button>
			</div>
		</div>
	)
}

export default Post
