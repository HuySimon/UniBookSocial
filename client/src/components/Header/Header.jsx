import React, { useEffect, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineLogout, AiOutlineDashboard } from 'react-icons/ai';
import {
	PiHeartLight,
	PiEnvelopeLight,
	PiListBold,
	PiHouseLight,
	PiPlusCircleLight,
	PiUsersLight,
	PiNewspaperLight,
	PiChartBarLight,
	PiGearLight,
} from 'react-icons/pi';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-toastify';
import CreatePost from '../Post/CreatePost';
import Notification from '../Notification';
import { Logo, Portrait } from '../../assets';
import SideBarItem from './SideBarItem';
import Setting from '../../views/pages/Setting';
import { useAuthContext } from '../../hooks/useAuthContext';
import Axios from '../../api/index';
import { useSearchContext } from '../../hooks/useSearch';
import { useHeaderContext } from '../../hooks/useHeaderContext';
const Header = () => {
	const [expand, setExpand] = useState(true)
	const navigate = useNavigate()
	const [isVisiblePost, setIsVisiblePost] = useState(false)
	const [isVisibleNotify, setIsVisibleNotify] = useState(false)
	const [activeOverlay, setActiveOverlay] = useState('')
	const [state, dispatch] = useAuthContext()
	const { clearSearch } = useSearchContext()
	const { stateHeader, dispatchHeader } = useHeaderContext()
	const handleButtonClick = (buttonName) => {
		dispatchHeader({ type: "SET_ACTIVE_BUTTON", payload: buttonName });
		localStorage.setItem("activeButtonProfile",0)
	};
	useEffect(() => {
		const checkTabletMode = () => {
			const tabletWidthThreshold = 768;
			const inTabletMode = window.innerWidth >= tabletWidthThreshold;
			setExpand(inTabletMode);
		};
		window.addEventListener('resize', checkTabletMode);
		checkTabletMode();
		return () => {
			window.removeEventListener('resize', checkTabletMode);
		};
	}, [state.user]);

	const iconList = [
		{
			icon: PiHouseLight,
			title: "Home",
			link: "/",
			handleCreate: () => { setIsVisibleNotify(false), clearSearch(), handleButtonClick("Home") },
		},
		{
			icon: CiSearch,
			title: "Search",
			link: "/search",
			handleCreate: () => { setIsVisibleNotify(false), handleButtonClick("Search") },
		},
	]
	const logout = () => {
		dispatch({ type: "LOGOUT" })
		setIsVisibleNotify(false)
		Axios.get('/api/v1/users/logout').then(res => {
			if (res.status === 200) {
				toast.success("Log out success")

			}
			navigate('/')
		}).catch(err => {
			console.log("BE ncc")
		})
	}
	return (
		<>
			<motion.div className={`fixed top-0 ${expand ? "w-[251px]" : "w-16 duration-[800ms]"} h-full bg-white border-r border-gray-300 transition-all z-[2]`}>
				<div className="relative w-full h-full flex flex-col items-stretch">
					<div className="navbar-logo h-16 !ml-0 my-4">
						<Link
							className='flex justify-center items-center w-full grow-0 shrink-0'
							to={"/"}
						>
							<img src={Logo} alt="" className='w-12 h-14 object-contain' />
							<span className={`font-bold text-2xl overflow-hidden transition-all ml-2 ${expand ? "w-44" : "w-0"}`}>SGU School</span>
						</Link>
					</div>
					<motion.ul className='flex flex-col justify-start items-stretch'>
						{iconList.map((item, index) => (
							<SideBarItem
								key={index}
								title={item.title}
								href={item.link}
								index={index}
								activeOverlay={activeOverlay}
								setActiveOverlay={setActiveOverlay}
								expand={expand}
								handleCreate={item.handleCreate}
								icon={<item.icon size={30} className='z-10' />}
							/>
						))}
						{
							localStorage.getItem("auth") === "true" && localStorage.getItem("user") != "" && (
								<>
									<SideBarItem
										title={"Notification"}
										href={window.location.href}
										index={2}
										activeOverlay={activeOverlay}
										setActiveOverlay={setActiveOverlay}
										expand={expand}
										handleCreate={() => { setIsVisibleNotify(!isVisibleNotify), handleButtonClick(!isVisibleNotify ? "Notification" : "Home") }}
										icon={<PiHeartLight size={30} className='z-10' />}
									/>
									<SideBarItem
										title={"Create"}
										href={window.location.href}
										index={3}
										activeOverlay={activeOverlay}
										setActiveOverlay={setActiveOverlay}
										expand={expand}
										handleCreate={() => { setIsVisiblePost(!isVisiblePost) }}
										icon={<PiPlusCircleLight size={30} className='z-10' />}
									/>
									<SideBarItem
										index={4}
										activeOverlay={activeOverlay}
										setActiveOverlay={setActiveOverlay}
										expand={expand}
										title={"Profile"}
										href={`/profile/${JSON.parse(localStorage.getItem("user")).user.id}`}
										handleCreate={() => { setIsVisibleNotify(false), clearSearch(), handleButtonClick("Profile") }}
										icon={<img src={`http://127.0.0.1:5000/public/images/users/${JSON.parse(localStorage.getItem("user")).user.avatar}`} className='w-[30px] h-[30px] rounded-full object-cover' />}
									/>
								</>
							)
						}
					</motion.ul>
					<div className="flex flex-col h-full items-stretch justify-end p-2 md:p-4">
						{
							localStorage.getItem("auth") === "false" ? (
								<div className="hidden md:flex w-full justify-between items-center gap-2">
									<button className='w-28 bg-primary-900 rounded-md text-white border border-primary-900 '>
										<Link to={"/login"} className='w-full h-full block px-6 py-2'>
											Login
										</Link>
									</button>
									<button className='w-28 border border-primary-900 text-primary-900 rounded-md'>
										<Link to={"/signup"} className='w-full h-full block px-6 py-2'>
											Sign up
										</Link>
									</button>
								</div>
							) : (
								<div
									onClick={() => { logout(), handleButtonClick("Home") }}
									className="group flex items-center justify-center md:justify-normal text-xl transition-all hover:bg-black/10 hover:text-primary-main p-2 rounded-lg cursor-pointer">
									<AiOutlineLogout size={30} />
									<span className={`ml-2 overflow-hidden ${expand ? "w-44" : "w-0 hidden"}`}>Log out</span>
									{!expand && (
										<div
											className={`
                                        absolute left-full rounded-md px-2 py-1 ml-6
                                        bg-primary-main text-white text-sm w-16
                                        invisible opacity-20 -translate-x-3 transition-all
                                        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                                    `}
										>
											Log out
										</div>
									)}
								</div>
							)}
					</div>
				</div>
			</motion.div>
			{
				localStorage.getItem("auth") === "false" && (
					<div className="fixed top-0 left-[60px] md:hidden w-[88%] h-fit bg-white shadow-lg z-[9]">
						<div className="flex justify-between items-center p-6 gap-5">
							<button className='w-full bg-primary-900 rounded-md text-white border border-primary-900 hover:bg-primary-800 transition-all'>
								<Link to={"/login"} className='w-full h-full block px-6 py-2'>
									Login
								</Link>
							</button>
							<button className='w-full border border-primary-900 text-primary-900 rounded-md hover:bg-primary-900 hover:text-white transition-all'>
								<Link to={"/signup"} className='w-full h-full block px-6 py-2'>
									Sign up
								</Link>
							</button>
						</div>
					</div>
				)
			}
			{isVisiblePost && (
				<CreatePost
					isVisiblePost={isVisiblePost}
					handleCreatePost={setIsVisiblePost}
					setActiveOverlay={setActiveOverlay}
				/>
			)}
			<AnimatePresence mode="wait">
				{isVisibleNotify && (
					<Notification
						isVisibleNotify={isVisibleNotify}
						handleNotify={setIsVisibleNotify}
						setActiveOverlay={setActiveOverlay}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
