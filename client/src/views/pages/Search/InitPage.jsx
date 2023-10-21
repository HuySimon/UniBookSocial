import React from 'react'
import { InitSearchImage } from '../../../assets'

const InitPage = () => {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center'>
			<img src={InitSearchImage} alt="" className='w-[50vh] h-[45vh]' />
			<p className='text-xl font-medium mb-2 tracking-wide'>Start searching for something right now!!</p>
			<p className='text-base text-gray-400'>Let's dive into it</p>
		</div>
	)
}

export default InitPage