import React, { useEffect } from 'react'
import Post from '../../../../components/Post/Post'
import Axios from '../../../../api/index'
import { useAuthContext } from '../../../../hooks/useAuthContext'
const HistoryPost = () => {

	const [state,dispatch] = useAuthContext()
	console.log()
	useEffect(() => {
		const fetchUserPost = async () => {
			try {
				const res = await Axios.get(`/api/v1/posts/userPost`)
			} catch (err) {
				
			}
		}
	}, [])

	return (
		<div className='flex flex-col gap-5'>
			History Post
			{/* <Post />
			<Post />
			<Post />
			<Post /> */}
		</div>
	)
}

export default HistoryPost