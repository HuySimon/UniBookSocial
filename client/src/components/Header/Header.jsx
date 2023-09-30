import React, { useEffect, useState, useMemo } from 'react'
import CreatePost from '../Post/CreatePost'
import Notification from '../Notification'
import { Link } from 'react-router-dom'
import { Logo, Portrait } from '../../assets'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineLogout } from 'react-icons/ai'
import { PiHeartLight, PiEnvelopeLight, PiListBold, PiHouseLight, PiPlusCircleLight } from 'react-icons/pi'
import { AnimatePresence, motion } from 'framer-motion'
import SideBarItem from './SideBarItem'
const Header = () => {

	const [expand, setExpand] = useState(true)
	const [isVisiblePost, setIsVisiblePost] = useState(false)
	const [isVisibleNotify, setIsVisibleNotify] = useState(false)
	const [isAuth, setIsAuth] = useState(false)
	const [activeOverlay, setActiveOverlay] = useState(0)
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
			link: "/"
		},
		{
			icon: CiSearch,
			title: "Search",
			link: "/search"
		},
		{
			icon: PiHeartLight,
			title: "Notifications",
			link: `/`,
			handleCreatePost: () => { setIsVisibleNotify(!isVisibleNotify) }
		},
		{
			icon: PiPlusCircleLight,
			title: "Create",
			handleCreatePost: () => { setIsVisiblePost(!isVisiblePost) }
		},
	]

	return (
		<>
			<motion.div className={`sticky top-0 ${expand ? "w-[251px]" : "w-16 duration-[800ms]"} h-screen bg-white border-r border-gray-300 transition-all z-10`}>
				<div className="relative grow-[1] w-full h-full flex flex-col items-stretch">
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
								handleCreatePost={item.handleCreatePost}
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
							icon={<img src={Portrait} className='w-[30px] h-[30px] rounded-full object-cover' />}
						/>
					</motion.ul>
					<div className="flex flex-col h-full items-stretch justify-end p-2 md:p-4">
						{
							!isAuth ? (
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
								<div className="group flex items-center justify-center md:justify-normal text-xl transition-all hover:bg-black hover:shadow-md !shadow-black hover:text-white p-2 rounded-lg cursor-pointer">
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
			</AnimatePresence>
		</>
	)
}

export default Header
