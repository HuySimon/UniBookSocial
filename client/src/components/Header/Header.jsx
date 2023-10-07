import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineLogout } from 'react-icons/ai'
import { PiHeartLight, PiEnvelopeLight, PiListBold, PiHouseLight, PiPlusCircleLight, PiUsersLight, PiNewspaperLight, PiChartBarLight, PiGearLight } from 'react-icons/pi'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'react-toastify'
import CreatePost from '../Post/CreatePost'
import Notification from '../Notification'
import { Logo, Portrait } from '../../assets'
import SideBarItem from './SideBarItem'
import Setting from '../../views/pages/Setting'
import { useAuthContext } from '../../hooks/useAuthContext'
const Header = () => {

	const [expand, setExpand] = useState(true)
	const [isVisibleSetting, setIsVisibleSetting] = useState(false)
	const [isVisiblePost, setIsVisiblePost] = useState(false)
	const [isVisibleNotify, setIsVisibleNotify] = useState(false)
	const [activeOverlay, setActiveOverlay] = useState(0)
	const [state, dispatch] = useAuthContext()
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
	}, [isVisibleNotify, isVisiblePost]);

	const iconList = [
		{
			icon: PiHouseLight,
			title: "Home",
			link: "/",
			handleCreate: () => { setIsVisibleNotify(false) },
			role: 1,
		},
		{
			icon: CiSearch,
			title: "Search",
			link: "/search",
			handleCreate: () => { setIsVisibleNotify(false) },
			role: 1,
		},
		{
			icon: PiHeartLight,
			title: "Notifications",
			link: window.location.href,
			handleCreate: () => { setIsVisibleNotify(!isVisibleNotify) },
			role: 1,
		},
		{
			icon: PiPlusCircleLight,
			title: "Create",
			link: window.location.href,
			handleCreate: () => { setIsVisiblePost(!isVisiblePost) },
			role: 1,
		},
		{
			icon: PiUsersLight,
			title: "Users",
			link: "/users",
			role: 2,
		},
		{
			icon: PiNewspaperLight,
			title: "Posts",
			link: "/posts",
			role: 2
		},
		{
			icon: PiChartBarLight,
			title: "Statics",
			link: "/statics",
			role: 2
		},
		// {
		// 	icon: PiGearLight,
		// 	title: "Setting",
		// 	link: window.location.href,
		// 	handleCreate: () => {
		// 		setIsVisibleSetting(!isVisibleSetting)
		// 	}
		// }
	]
	const logout = () => {
		dispatch({ type: "LOGOUT" })
		toast.success("You have logout!")
	}
	return (
		<>
			<motion.div className={`fixed top-0 ${expand ? "w-[251px]" : "w-16 duration-[800ms]"} h-full bg-white border-r border-gray-300 transition-all z-10`}>
				<div className="relative w-full h-full flex flex-col items-stretch">
					<div className="navbar-logo h-16 !ml-0 my-4">
						<Link
							className='flex justify-start items-center w-full grow-0 shrink-0'
							to={"/"}
						>
							<img src={Logo} alt="" className='h-full w-full md:h-16 md:w-20' />
							<span className={`font-bold text-2xl overflow-hidden transition-all ${expand ? "w-44" : "w-0"}`}>SGU School</span>
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
						<SideBarItem
							index={4}
							activeOverlay={activeOverlay}
							setActiveOverlay={setActiveOverlay}
							expand={expand}
							title={"Profile"}
							href={"/profile"}
							handleCreate={() => setIsVisibleNotify(false)}
							icon={<img src={Portrait} className='w-[30px] h-[30px] rounded-full object-cover' />}
						/>
					</motion.ul>
					<div className="flex flex-col h-full items-stretch justify-end p-2 md:p-4">
						{
							state.isAuthorized ? (
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
									onClick={() => dispatch({ type: "LOGOUT" })}
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
							)
						}
					</div>
				</div>
			</motion.div>
			{
				isVisiblePost && (
					<CreatePost isVisiblePost={isVisiblePost} handleCreatePost={setIsVisiblePost} setActiveOverlay={setActiveOverlay} />
				)
			}
			<AnimatePresence mode='wait'>
				{
					isVisibleNotify && <Notification isVisibleNotify={isVisibleNotify} handleNotify={setIsVisibleNotify} setActiveOverlay={setActiveOverlay} />
				}
				{/* {
					isVisibleSetting && <Setting />
				} */}
			</AnimatePresence>
		</>
	)
}

export default Header
