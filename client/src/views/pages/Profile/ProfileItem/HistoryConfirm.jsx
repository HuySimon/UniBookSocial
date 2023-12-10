import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { RiSearch2Line } from 'react-icons/ri'
import Axios from '../../../../api/index'
import ConfirmPost from './HistoryConfirmComponents/ConfirmPost'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import { useReviewContext } from '../../../../hooks/useReviewContext'
import { usePostContext } from '../../../../hooks/usePostContext'
const HistoryConfirm = () => {
	const menu = ["Confirmed", "Delivered"]
	const [isLoading, setIsLoading] = useState(false)
	const [state, dispatch] = useAuthContext()
	const [query, setQuery] = useState("")
	const [statePost, dispatchPost] = usePostContext()
	const [stateReview, dispatchReview] = useReviewContext()
	const [activeButton, setActiveButton] = useState(0)
	const [data, setData] = useState([])
	const curUser = state.user.user
	const fetchConfirmPost = async () => {
		setIsLoading(true)
		let url = `/api/v1/posts?filter=and(equals(status,'Confirmed'),equals(userConfirm,'${curUser.id}'))&include=userPostData&sort=-updatedAt`
		if (activeButton === 0) {
			url = `/api/v1/posts?filter=and(equals(status,'Confirmed'),equals(userConfirm,'${curUser.id}'))&include=userPostData&sort=-updatedAt`
		} else {
			url = `/api/v1/posts?filter=and(equals(status,'Delivered'),equals(userConfirm,'${curUser.id}'))&include=userPostData&sort=-updatedAt`
		}
		try {
			const res = await Axios.get(url)
			if (res.status === 200) {
				// console.log(res.data.data.data)
				setData(res.data.data.data)
				setIsLoading(false)
			}
		} catch (err) {
			console.log(err)
			setIsLoading(false)
		}
	}
	const filteredItems = useMemo(() => {
		return data.filter(item => {
			return (
				item.title.toLowerCase().includes(query.toLowerCase()) ||
				item.id.toString().toLowerCase().includes(query.toLowerCase())
				// item.userPostData.username.toLowerCase().includes(query.toLowerCase())
			)
		})
	}, [query, data])
	useEffect(() => {
		fetchConfirmPost()
	}, [activeButton, statePost.isLoadingHistoryConfirm, stateReview])
	// console.log(filteredItems)
	return (
		<div className='flex flex-col gap-3'>
			<div className="flex w-full justify-between items-start bg-gray-100 border-b-[3px] border-black/40">
				{
					menu.map((item, index) => (
						<div
							key={index}
							onClick={() => setActiveButton(index)}
							className={`relative w-full py-3 flex-1 cursor-pointer text-center font-medium ${activeButton === index && "text-primary-main"}`}>
							<button
								type='button'
								className='text-lg'>{item}</button>
							{activeButton === index && (
								<motion.div
									layoutId='active-button'
									className='absolute w-full h-[3px] bg-primary-main -bottom-[3px]' />
							)}
						</div>
					))
				}
			</div>
			<div className="flex gap-3 items-center w-full border border-gray-400 p-2 rounded-sm">
				<RiSearch2Line size={28} className='text-gray-400' />
				<input type="search" value={query} onChange={e => setQuery(e.target.value)} className='border-none w-full focus:outline-none text-black placeholder:text-sm' placeholder='Search here ....' />
			</div>
			<>
				{
					filteredItems && filteredItems.length != 0 ? (
						<div className="flex flex-col gap-5 mb-5">
							{
								filteredItems.map((post, index) => (
									<ConfirmPost key={index} post={post} />
								))
							}
						</div>
					) : (
						<div className="w-full h-screen flex justify-center items-center">
							<p className='text-6xl text-gray-500 font-mono'>No posts found {query.trim() != "" ? `with "${query}"` : ""}</p>
						</div>
					)
				}
			</>
		</div >
	)
}

export default HistoryConfirm