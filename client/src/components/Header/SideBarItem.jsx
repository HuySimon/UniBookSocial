import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { PiHeartLight, PiEnvelopeLight, PiListBold, PiHouseLight, PiPlusCircleLight } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useHeaderContext } from '../../hooks/useHeaderContext';

const SideBarItem = ({ title, href, index, activeOverlay, setActiveOverlay, expand, icon, handleCreate, target }) => {
	const [state, dispatch] = useAuthContext()
	const { stateHeader, dispatchHeader } = useHeaderContext()
	return (
		<li
			onClick={() => {
				setActiveOverlay(title);
			}}
			className='px-2 md:px-4 pb-4 flex items-center font-semibold relative'>
			<Link
				to={href}
				target={target}
				onClick={() => {
					handleCreate();
				}}
				className={`
                        relative
                        flex items-center w-full h-12 transition-all hover:text-primary-main
                        pl-2 py-3 group
                        hover:bg-black/10 rounded-md
                        ${stateHeader.activeButton === title ? "text-primary-main bg-black/10" : "text-black"}
                    `}
			>
				{icon}
				<span className={`ml-2 overflow-hidden z-10 ${expand ? "w-44" : "w-0"}`}>{title}</span>
				{stateHeader.activeButton === title && (
					<motion.div
						layoutId='overlay-button'
						className="absolute -left-4 w-1 h-3/4 bg-primary-main rounded-lg">
					</motion.div>
				)}
				{!expand && (
					<div
						className={`
                                absolute left-full rounded-md px-2 py-1 ml-6
                                bg-primary-main text-white text-sm
                                invisible opacity-20 -translate-x-3 transition-all
                                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                            `}
					>
						{title}
					</div>
				)}
			</Link>
		</li>
	);
};

export default SideBarItem;
