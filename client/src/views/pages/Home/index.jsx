import React, { useEffect, useState } from 'react';
import Axios from '../../../api/index';
import Post from '../../../components/Post/Post';
import BriefProfile from '../Profile/BriefProfile';
import { ImSpinner9 } from 'react-icons/im';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';

const Index = () => {
	const posts = useLoaderData();

	return (
		<>
			<div className="p-[25px] lg:px-[150px] xl:px-[250px] mx-auto lg:flex justify-center items-start gap-5">
					<div className="post-list flex-1">
						{posts.data.map((post) => (
							<Post key={post.id} post={post} />
						))}
					</div>
					<BriefProfile />
			<ScrollRestoration getKey={location => {
				return location.pathname
			}}/>
			</div>
		</>
	);
};
export const AllPostLoader = async () => {
	try {
		// const response = await Axios.get("/api/v1/posts?filter=and(and(and(equals(status,'Unconfirm'),equals(isGeneralSubject,'0')),contains(title,'t')),equals(isNew,'0'))&include=userPostData&sort=-createdAt");
		const response = await Axios.get("/api/v1/posts?filter=equals(status,'Unconfirm')&include=userPostData&sort=-createdAt");

		// /api/v1/posts?filter=and(equals(status,'Unconfirm'),contains(title,'t'),)&include=userPostData&sort=-createdAt
		//greaterOrEqual
		//lessOrEqual
		//equals
		//contains
		return response.data.data; // Removed the extra ".data" and ".data"
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error; // Re-throw the error to handle it further up the call stack
	}
};

export default Index;
