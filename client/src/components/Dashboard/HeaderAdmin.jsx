import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineLogout } from 'react-icons/ai';
import {
	PiHeartLight,
	PiEnvelopeLight,
	PiListBold,
	PiHouseLight,
	PiPlusCircleLight,
	PiUsersLight,
	PiNewspaperLight,
	PiChartBarLight,
	PiRocketLaunchLight,
} from 'react-icons/pi';
import { AnimatePresence, motion } from 'framer-motion';

import CreatePost from '../Post/CreatePost';
import Notification from '../Notification';
import { Logo, Portrait } from '../../assets';
import SideBarItem from './SideBarItemAdmin';
import { useAuthContext } from '../../hooks/useAuthContext';

const HeaderAdmin = () => {
	const [expand, setExpand] = useState(true);
	const [state,dispatch] = useAuthContext()
	const [isAuth, setIsAuth] = useState(false);
	const [activeOverlay, setActiveOverlay] = useState(0);
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
	}, []);

