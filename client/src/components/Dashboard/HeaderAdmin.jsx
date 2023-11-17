// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { PiUsersLight, PiNewspaperLight, PiChartBarLight, PiRocketLaunchLight } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { Logo } from '../../assets';
import SideBarItem from './SideBarItemAdmin';
import { useAuthContext } from '../../hooks/useAuthContext';
import Axios from '../../api/index';
import { toast } from 'react-toastify';
const HeaderAdmin = () => {
    const [expand, setExpand] = useState(true);
    const [state, dispatch] = useAuthContext();
    const navigate = useNavigate();
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

    const iconList = [
        {
            icon: PiRocketLaunchLight,
            title: 'Dashboard',
            link: '/dashboard',
            role: 2,
        },
        {
            icon: PiUsersLight,
            title: 'Users',
            link: '/dashboard/users',
            role: 2,
        },
        {
            icon: PiNewspaperLight,
            title: 'Posts',
            link: '/dashboard/posts',
            role: 3,
        },
        {
            icon: PiChartBarLight,
            title: 'Statistics',
            link: '/dashboard/statistics',
            role: 3,
        },
    ];
    const logout = async () => {
        dispatch({ type: 'LOGOUT' });
        try {
            const res = await Axios.get('/api/v1/users/logout');
            if (res.status === 200) {
                toast.success('Log out success');
            }
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <motion.div
                className={`fixed top-0 ${
                    expand ? 'w-[251px]' : 'w-16 duration-[800ms]'
                } h-full bg-white border-r border-gray-300 transition-all z-10`}
            >
                <div className="relative w-full h-full flex flex-col items-stretch">
                    <div className="navbar-logo h-16 !ml-0 my-4">
                        <Link className="flex justify-start items-center w-full grow-0 shrink-0" to={'/'}>
                            <img src={Logo} alt="" className="w-12 h-14 object-contain md:h-16 md:w-20" />
                            <span
                                className={`font-bold text-2xl overflow-hidden transition-all ${
                                    expand ? 'w-44' : 'w-0'
                                }`}
                            >
                                UnibookSocial
                            </span>
                        </Link>
                    </div>
                    <motion.ul className="flex flex-col justify-start items-stretch">
                        {iconList.map(
                            (item, index) => (
                                // Object.entries(state.user).length > 0 &&
                                // item.role === state.user.user.role && (
                                <SideBarItem
                                    key={index}
                                    title={item.title}
                                    href={item.link}
                                    index={index}
                                    activeOverlay={activeOverlay}
                                    setActiveOverlay={setActiveOverlay}
                                    expand={expand}
                                    icon={<item.icon size={30} className="z-10" />}
                                />
                            ),
                            // ),
                        )}
                    </motion.ul>
                    <div className="flex flex-col h-full items-stretch justify-end p-2 md:p-4">
                        {!localStorage.getItem('auth') === 'false' ? (
                            <div className="hidden md:flex w-full justify-between items-center gap-2">
                                <button className="w-28 bg-primary-900 rounded-md text-white border border-primary-900 ">
                                    <Link to={'/login'} className="w-full h-full block px-6 py-2">
                                        Login
                                    </Link>
                                </button>
                                <button className="w-28 border border-primary-900 text-primary-900 rounded-md">
                                    <Link to={'/signup'} className="w-full h-full block px-6 py-2">
                                        Sign up
                                    </Link>
                                </button>
                            </div>
                        ) : (
                            <div
                                onClick={() => {
                                    logout();
                                }}
                                className="group flex items-center justify-center md:justify-normal text-xl transition-all hover:bg-black hover:shadow-md !shadow-black hover:text-white p-2 rounded-lg cursor-pointer"
                            >
                                <AiOutlineLogout size={30} />
                                <span className={`ml-2 overflow-hidden ${expand ? 'w-44' : 'w-0 hidden'}`}>
                                    Log out
                                </span>
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
        </>
    );
};

export default HeaderAdmin;
