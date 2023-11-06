import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiSearch2Line } from 'react-icons/ri'
import { ImSpinner9 } from 'react-icons/im'
import Axios from '../../../../api/index'
import ConfirmPost from './HistoryConfirmComponents/ConfirmPost'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import { useForm } from 'react-hook-form'
const HistoryConfirm = () => {
	const menu = ["All", "Confirm", "Delivered"]
	const [isLoading, setIsLoading] = useState(false)
	const [state, dispatch] = useAuthContext()
	const [activeButton, setActiveButton] = useState(0)
	const [data, setData] = useState([])
	const curUser = state.user.user
	const { register, handleSubmit } = useForm({
		defaultValues: {
			query: ""
		}
	})
	const onSubmit = async (data) => {
		try {

		} catch (err) {

		}
	}
	const fetchConfirmPost = async () => {
		setIsLoading(true)
		let url = `/api/v1/posts?filter=equals(userConfirm,'${curUser.id}')&include=userPostData`
		if (activeButton === 0) {
			url = `/api/v1/posts?filter=equals(userConfirm,'${curUser.id}')&include=userPostData`
		} else if (activeButton === 1) {
			url = `/api/v1/posts?filter=and(equals(status,'Confirm'),equals(userConfirm,'${curUser.id}'))&include=userPostData`
		} else {
			url = `/api/v1/posts?filter=and(equals(status,'Delivered'),equals(userConfirm,'${curUser.id}'))&include=userPostData`
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
	useEffect(() => {
		fetchConfirmPost()
	}, [activeButton])
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
				<form
					onSubmit={handleSubmit(onSubmit)}
				>
					<input type="text" {...register("query")} className='border-none w-full focus:outline-none text-black placeholder:text-sm' placeholder='You can search by anything....' />
				</form>
			</div>
			{
				isLoading ? (
					<div className="w-full h-screen flex justify-center items-center">
						<ImSpinner9 className="animate-spin duration-500 text-primary-main" size={50} />
					</div>
				) : (
					<>
						{
							data.length != 0 ? (
								<div className="flex flex-col gap-5 mb-5">
									{
										data.map((post, index) => (
											<ConfirmPost key={index} post={post} />
										))
									}
								</div>
							) : (
								<div className="w-full h-screen flex justify-center items-center">
									<p className='text-6xl text-gray-500 font-mono'>Nothing in here</p>
								</div>
							)
						}
					</>
				)
			}
		</div >
	)
}

export default HistoryConfirm