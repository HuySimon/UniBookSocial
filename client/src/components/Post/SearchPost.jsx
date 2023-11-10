import React, { useEffect } from 'react'
import { Portrait } from '../../assets'
import { Link } from 'react-router-dom'

const SearchPost = ({ post }) => {


	return (
		<div className='2xl:w-64 h-fit border border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all'>
			<div className="w-full h-[25vh]">
				<Link
				to={`/detailPost/${post.id}`}
				>
					<img src={`http://127.0.0.1:5000/public/images/posts/${post.mainImage}`} alt="Short Preview Img"
						title='Click to view detail'
						className='w-full h-full object-cover object-center' />
				</Link>
			</div>
			<div className="flex flex-col gap-1 p-2 bg-white text-black">
				<p className='font-medium'>{post.title}</p>
				<div className="flex justify-between items-center">
					<div className="flex flex-col text-sm">
						<p>New: <span>{post.isNew === false ? "Old" : "New"}</span></p>
						<p>General Subject: <span>{post.isGeneralSubject === false ? "No" : "Yes"}</span></p>
					</div>
					<span className='text-xl text-primary-900 font-medium'>₫{post.price}</span>
				</div>
			</div>
		</div>
	)
}

export default SearchPost