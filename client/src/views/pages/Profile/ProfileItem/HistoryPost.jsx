import React, { useEffect, useState } from 'react'
import Post from '../../../../components/Post/Post'
import Axios from '../../../../api/index'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import { ImSpinner9 } from 'react-icons/im'
import { NoPostYet } from '../../../../assets'
import ProfilePost from '../../../../components/Post/ProfilePost'
import { usePostContext } from '../../../../hooks/usePostContext'
const HistoryPost = () => {

	const [state, dispatch] = useAuthContext()
	const [statePost, dispatchPost] = usePostContext()
	const [userPosts, setUserPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		const fetchUserPost = async () => {
			setIsLoading(true)
			try {
				const res = await Axios.get(`/api/v1/posts?filter=equals(userPost,'${JSON.parse(localStorage.getItem("user")).user.id}')&include=userPostData&sort=-createdAt`)
				if (res.status === 200) {
					setUserPosts(res.data.data.data)
					// console.log(res.data.data.data)
					setIsLoading(false)
				}
			} catch (err) {
				console.log(err)
				setIsLoading(false)
			}
		}
		fetchUserPost()
	}, [state.user,statePost])
	return (
		userPosts.length === 0 ? (
			<div className="w-full h-[80vh]">
				<div className="w-full h-full flex flex-col justify-center items-center">
					<img src={NoPostYet} alt="" className='w-[40vh] h-[40vh] object-contain' />
					<p className='tracking-wide text-xl font-medium mb-1'>You haven't post anything yet!</p>
					<p className='text-sm text-gray-500'>Post something to see the history post</p>
				</div>
			</div>
		) : (
			<div className='flex flex-col gap-5'>
				{
					isLoading ? (
						<div className="w-full h-full flex justify-center items-center">
							<ImSpinner9 className="animate-spin duration-500 text-primary-main" size={50} />
						</div>
					) : (
						userPosts.map((post, index) => (
							<ProfilePost key={index} post={post} />
						))
					)
				}
			</div>
		)

	)
}

export default HistoryPost