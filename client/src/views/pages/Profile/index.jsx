import React, { useEffect, useState } from 'react'
import { Portrait, SignupImg } from '../../../assets'
import { IoCallOutline } from 'react-icons/io5'
import { HiOutlineServer } from 'react-icons/hi'
import { BsCheck2Circle } from 'react-icons/bs'
import { MdOutlineRateReview, MdPhotoCamera } from 'react-icons/md'
import { About, HistoryConfirm, HistoryPost, Review } from './ProfileItem'
import Axios from '../../../api/index'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { toast } from 'react-toastify'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const Index = () => {

	const [currentUser, setCurrentUser] = useState({})
	const [selectedFile, setSelectedFile] = useState(null)
	const [state, dispatch] = useAuthContext()
	const navigate = useNavigate()
	useEffect(() => {
		document.title = "Profile"
		const getUser = async () => {
			try {
				const res = await Axios.get('/api/v1/users/me')
				setCurrentUser(res.data.data.data)
				dispatch({ type: "LOGIN", value: res.data.data.data })
				console.log(res.data.data.data)
			} catch (err) {
				toast.error("Can't get user information")
				document.title = "Home"
				console.log(err)
				navigate('/')
			}
		}
		const Test = async () => {
			try {
				const res = await Axios.get('/api/v1/users/5')
				console.log(res.data)

			} catch (err) {
				console.log(err.response)
			}
		}
		Test()
		getUser()
	}, [])
	const [activeButton, setActiveButton] = useState(0)
	const menu = [
		{
			id: 0,
			icon: IoCallOutline,
			title: "About",
			href: "",
		},
		{
			id: 1,
			icon: HiOutlineServer,
			title: "History Post",
			href: "historyPost",
		},
		{
			id: 2,
			icon: BsCheck2Circle,
			title: "History Confirm",
			href: "historyConfirm",
		},
		{
			id: 3,
			icon: MdOutlineRateReview,
			title: "Reivew",
			href: "review",
		}
	]
	const handleButton = (id) => {
		setActiveButton(id)
	}

	return (
		<div className='w-full flex flex-col px-[25px] lg:px-[150px] xl:px-[250px] mx-auto'>
			<div className="w-full flex flex-col h-[400px] relative z-[8]">
				<div className="coverImage w-full h-full absolute inset-0 ">
					<img src={SignupImg} alt="" className='w-full h-full object-cover object-top' />
				</div>
				<div className="w-full flex justify-end items-center relative top-80">
					<div className="w-36 h-36 mx-auto relative">
						<img src={`http://127.0.0.1:5000/public/images/users/${currentUser.avatar}`} alt="" className='w-full h-full rounded-full object-cover object-center' />
						<label htmlFor="imageFIle" className='absolute top-3/4 right-0 z-10 overflow-hidden cursor-pointer'>
							<input type="file" name="" id="imageFIle" className='hidden absolute w-full h-full' />
							<MdPhotoCamera size={40} className=' bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400 transition-all hover:text-white/70' />
						</label>
					</div>
				</div>
			</div>
			<div className="flex flex-col text-center mt-[68px] pb-5">
				<p className='font-medium text-3xl'>{currentUser.username}</p>
			</div>
			<div className="pt-4 w-full z-[8]">
				<div className="h-full flex lg:flex-row flex-col">
					<div className=" w-full lg:w-1/4 flex lg:h-full h-fit flex-row lg:flex-col justify-between lg:justify-start items-center gap-5 lg:border-r border-gray-400 lg:pr-6 lg:mb-0 mb-6">
						{
							menu.map((item, index) => (
								<Link
									key={index}
									to={`/profile/${currentUser.id}/${item.href}`}
									onClick={() => handleButton(index)}
									className={`w-full lg:flex items-center text-[#929292] relative cursor-pointer mb-1 p-3 rounded-md 
												transition-all duration-300 lg:text-left text-center 
												${activeButton === index ? 'bg-primary-main text-white shadow-md !shadow-primary-700 ' : ''}`}>
									<item.icon size={26} className='lg:block hidden' />
									<span className='inline-block lg:ml-3 text-base lg:font-medium'>{item.title}</span>
								</Link>
							))
						}
					</div>
					<div className="w-full lg:w-3/4 lg:pl-6">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index
