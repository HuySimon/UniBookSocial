import React from 'react'
import { PiUserCircleLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const ConfirmPost = ({post}) => {
	return (
		<div className="w-full flex flex-col gap-3 border border-gray-400 p-5 rounded-sm">
			<div className="w-full flex flex-row justify-between items-center">
				<div className="flex gap-3 items-center">
					<div className="w-14 h-14 rounded-full overflow-hidden">
						<img src={`http://127.0.0.1:5000/public/images/users/${post.userPostData.avatar}`} alt="" className='w-full h-full object-cover' />
					</div>
					<span className="name font-medium text-lg">
						{post.userPostData.username}
					</span>
					<Link 
					to={`/profile/${post.userPostData.id}`}
					className="p-1 border text-sm flex items-center text-gray-700">
						<PiUserCircleLight size={18} />
						<span className='inline-block ml-1'>View Profile</span>
					</Link>
				</div>
				<span className="status uppercase text-base font-semibold !leading-7 text-primary-900">confirmed</span>
			</div>
			<div className="my-1">
				<div className="w-full flex justify-between items-center border-y border-gray-400">
					<div className="flex lg:flex-[4] py-4">
						<div className="w-32 h-32 max-w-[128px]">
							<img src={`http://127.0.0.1:5000/public/images/posts/${post.mainImage}`} alt="" className='w-full h-full object-cover' />
						</div>
						<div className="lg:w-fit w-1/2 flex flex-col gap-2 text-sm ml-3">
							<p className='text-base	font-medium tracking-wide'>{post.title}</p>
							<p><span className='font-semibold'>General Subject:</span> {post.isGeneralSubject === 0 ? "Yes" : "No"} </p>
						</div>
					</div>
					<div className="flex-1 text-right">
						<span className='text-primary-main font-medium'>₫{post.price}</span>
					</div>
				</div>
				<div className="flex justify-end items-center p-5">
					<p>Order Total: <span className='text-2xl text-primary-main'>₫{post.price}</span></p>
				</div>
				<div className="flex justify-end items-center gap-5">
					<button className='w-fit px-5 py-2 bg-primary-main border border-primary-main text-white rounded-sm hover:bg-primary-700 transition-all'>
						Order Received
					</button>
					<button className='w-fit px-5 py-2 border border-primary-main text-primary-main rounded-sm'>
						Cancel Order
					</button>
				</div>
			</div>
		</div>
	)
}

export default ConfirmPost