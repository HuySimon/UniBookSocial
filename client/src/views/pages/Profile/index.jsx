import React, { useEffect, useState } from 'react'
import { SignupImg } from '../../../assets'
import { IoCallOutline } from 'react-icons/io5'
import { HiOutlineServer } from 'react-icons/hi'
import { BsCheck2Circle } from 'react-icons/bs'
import { MdOutlineRateReview, MdPhotoCamera, MdCameraEnhance } from 'react-icons/md'
import Axios from '../../../api/index'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { toast } from 'react-toastify'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import UpdateAvatar from '../../../components/Avatar/UpdateAvatar'
import UpdateCoverImage from '../../../components/Avatar/UpdateCoverImage'
const Index = () => {

	const [currentUser, setCurrentUser] = useState({})
	const [selectedFile, setSelectedFile] = useState(null)
	const [selectedCoverFile, setSelectedCoverFile] = useState(null)
	const [state, dispatch] = useAuthContext()
	const profileId = useParams()
	const navigate = useNavigate()
	const getUser = async () => {
		try {
			const res = await Axios.get(`/api/v1/users/${profileId.id}`)
			setCurrentUser(res.data.data.data)
			// dispatch({ type: "LOGIN", value: res.data.data.data })
			// console.log(res.data.data.data)
		} catch (err) {
			toast.error("Can't get user information")
			document.title = "Home"
			console.log(err)
			navigate('/')
		}
	}
	useEffect(() => {
		document.title = "Profile"
		getUser()
	}, [profileId.id, selectedFile])
	const [activeButton, setActiveButton] = useState(JSON.parse(localStorage.getItem("activeButtonProfile")))
	const menu = [
		{
			icon: IoCallOutline,
			title: "About",
			href: "",
		},
		{
			icon: MdOutlineRateReview,
			title: "Review",
			href: "review"
		}
	]
	const handleButton = (id) => {
		setActiveButton(id)
		localStorage.setItem("activeButtonProfile", id)
	}
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setSelectedFile(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};
	const handleCoverFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setSelectedCoverFile(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};
	// console.log(selectedFile)
	return (
		<div className='w-full flex flex-col px-[25px] lg:px-[150px] xl:px-[200px] mx-auto'>
			<div className="w-full flex flex-col h-[400px] relative">
				<div className="w-full h-full absolute inset-0">
					<img src={SignupImg} alt="" className='w-full h-full object-cover object-top rounded-b-md' />
					<label htmlFor='coverImageFile' className="w-fit flex items-center gap-1 p-3 bg-white/30 rounded-md absolute top-[85%] right-2 transition-all hover:bg-white/60 cursor-pointer">
						<input type="file" name='' id='coverImageFile' onChange={handleCoverFileChange} accept="image/*" className='absolute w-full h-full inset-0 hidden' />
						<MdCameraEnhance size={28} className='text-white' />
						<span className='font-medium text-white'>Edit cover photo</span>
					</label>
				</div>
				<div className="w-fit flex justify-end items-center mx-auto relative top-80">
					<div className="w-36 h-36 mx-auto relative">
						<img src={`http://127.0.0.1:5000/public/images/users/avatar/${currentUser.avatar}`} alt="" className='w-full h-full rounded-full object-cover object-center' />
						{
							(Object.entries(state.user).length) > 0 && (state.user.user.id === currentUser.id) && (
								<label htmlFor="imageFile" className='absolute top-3/4 right-0 z-10 overflow-hidden cursor-pointer'>
									<input type="file" name="" id="imageFile" className='hidden absolute w-full h-full' onChange={handleFileChange} accept="image/*" />
									<MdPhotoCamera size={40} className=' bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400 transition-all hover:text-white' />
								</label>
							)
						}
					</div>
				</div>
			</div>
			<div className="flex flex-col text-center mt-[68px] pb-5">
				<p className='font-medium text-3xl'>{currentUser.username}</p>
			</div>
			<div className="pt-4 w-full">
				<div className="h-full flex lg:flex-row flex-col">
					<div className=" w-full lg:w-1/4 flex lg:h-full h-fit flex-row lg:flex-col justify-between lg:justify-start items-center gap-5 lg:pr-6 lg:mb-0 mb-6">
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
						{
							(Object.entries(state.user).length > 0 && (state.user.user.id === currentUser.id) && (
								<>
									<Link
										to={`/profile/${currentUser.id}/historyPost`}
										onClick={() => handleButton(3)}
										className={`w-full lg:flex items-center text-[#929292] relative cursor-pointer mb-1 p-3 rounded-md 
												transition-all duration-300 lg:text-left text-center 
												${activeButton === 3 ? 'bg-primary-main text-white shadow-md !shadow-primary-700 ' : ''}`}>
										<HiOutlineServer size={26} className='lg:block hidden' />
										<span className='inline-block lg:ml-3 text-base lg:font-medium'>History Post</span>
									</Link>
									<Link
										to={`/profile/${currentUser.id}/historyConfirm`}
										onClick={() => handleButton(4)}
										className={`w-full lg:flex items-center text-[#929292] relative cursor-pointer mb-1 p-3 rounded-md 
												transition-all duration-300 lg:text-left text-center 
												${activeButton === 4 ? 'bg-primary-main text-white shadow-md !shadow-primary-700 ' : ''}`}>
										<BsCheck2Circle size={26} className='lg:block hidden' />
										<span className='inline-block lg:ml-3 text-base lg:font-medium'>History Confirm</span>
									</Link>
								</>
							))
						}
					</div>
					<div className="w-full lg:w-3/4 lg:pl-6 lg:border-l border-gray-400">
						<Outlet />
					</div>
				</div>
			</div>
			{
				selectedFile != null && <UpdateAvatar file={selectedFile} setSelectedFile={setSelectedFile} />
			}
			{
				selectedCoverFile != null && <UpdateCoverImage file={selectedCoverFile} setSelectedCoverFile={setSelectedCoverFile}  />
			}
		</div >
	)
}

export default Index
export const AllReviewLoader = async () => {
	try {
		const response = await Axios.get("/api/v1/reviews");

		return response.data.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};