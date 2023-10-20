import React, { useEffect, useState } from 'react';
import Axios from '../../../api/index';
import Post from '../../../components/Post/Post';
import BriefProfile from '../Profile/BriefProfile';
import { ImSpinner9 } from 'react-icons/im';
import { useLoaderData } from 'react-router-dom';

const Index = () => {
	const posts = useLoaderData()

	return (
		<div className='p-[25px] lg:px-[150px] xl:px-[250px] mx-auto lg:flex justify-center items-start gap-5'>
			{/* {loading ? (
				<div className="h-screen flex justify-center items-center">
					<ImSpinner9 className='animate-spin duration-500 text-primary-main' size={50} />
				</div>
			) : ( */}
			<>
				<div className="post-list flex-1">
					{posts.data.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</div>
				<BriefProfile />
			</>
			{/* )} */}
		</div>
	);
};
export const AllPostLoader = async () => {
	try {
		const response = await Axios.get('/api/v1/posts?filter[status]=Confirm&include=userPostData');
		return response.data.data; // Removed the extra ".data" and ".data"
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error; // Re-throw the error to handle it further up the call stack
	}
};


export default Index;
