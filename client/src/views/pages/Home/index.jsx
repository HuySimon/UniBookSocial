import React, { useEffect, useState } from 'react';
import Axios from '../../../api/index';
import Post from '../../../components/Post/Post';
import BriefProfile from '../Profile/BriefProfile';
import { ImSpinner9 } from 'react-icons/im';
import { useLoaderData } from 'react-router-dom';

const Index = () => {

};
export const AllPostLoader = async () => {
	try {
		const response = await Axios.get('/api/v1/posts?filter[status]=Unconfirm&include=userPostData');
		return response.data.data; // Removed the extra ".data" and ".data"
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error; // Re-throw the error to handle it further up the call stack
	}
};


export default Index;
