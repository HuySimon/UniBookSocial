import React, { useEffect, useState } from 'react';
import Axios from '../../../api/index';
import Post from '../../../components/Post/Post';
import BriefProfile from '../Profile/BriefProfile';
import { ImSpinner9 } from 'react-icons/im';

const Index = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getAllPost = async () => {
			try {
				const response = await Axios.get('/api/v1/posts?filter[status]=Unconfirm');
				setPosts(response.data.data.data); // Assuming the response contains an array of posts
				setLoading(false);
				// console.log(response.data.data.data)
				// console.log(response)
			} catch (err) {
				// console.error(err);
				setLoading(false);
			}
		};
		getAllPost();
	}, []);

	return (
		<div className='p-[25px] lg:px-[150px] xl:px-[250px] mx-auto lg:flex justify-center items-start gap-5'>
			{loading ? (
				<div className="h-screen flex justify-center items-center">
					<ImSpinner9 className='animate-spin duration-500 text-primary-main' size={50} />
				</div>
			) : (
				<>
					<div className="post-list flex-1">
						{posts.map((post) => (
							<Post key={post.id} post={post} />
						))}
					</div>
					<BriefProfile />
				</>
			)}
		</div>
	);
};

export default Index;
