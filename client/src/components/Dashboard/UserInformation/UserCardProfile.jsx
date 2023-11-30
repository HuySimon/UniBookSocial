// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { AvatarUser, SignupImg } from '../../../assets';
import { set } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
function UserCardProfile({ onClose, user }) {
    console.log(user);
    const modalRef = useRef(null);
    const [isZoomImage, setIsZoomImage] = useState(false);
    const [srcImg, setSrcImg] = useState();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-hidden md:inset-0 max-h-full bg-opacity-50 bg-black h-webkit-fill-available">
            <div ref={modalRef} className="relative w-full max-w-xs max-h-full">
                <AiOutlineClose
                    onClick={() => onClose()}
                    size={22}
                    className="fixed top-4 right-4 text-white cursor-pointer hover:rotate-[360deg] transition-all duration-300 z-20"
                />
                <div className="max-w-sm w-fit h-fit items-center">
                    <div className="lg:block w-[300px] bg-white rounded-lg overflow-hidden border border-gray-400 relative shadow-md">
                        <div className="w-full h-[200px]">
                            <img
                                src={`http://127.0.0.1:5000/public/images/users/cover/${user.coverImage}`}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-28 h-28 rounded-full overflow-hidden absolute left-0 right-0 top-[14vh] mx-auto">
                            <img
                                src={`http://127.0.0.1:5000/public/images/users/avatar/${user.avatar}`}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col mt-16">
                            <div className="flex justify-between items-center gap-3 px-4 py-3 border-y border-gray-500">
                                <span className="font-medium">Phone</span>
                                <span className="text-gray-600">{user.phoneNumber}</span>
                            </div>
                            <div className="flex justify-between items-center gap-3 px-4 py-3 border-b border-gray-500">
                                <span className="font-medium">Email</span>
                                <span className="text-gray-600">{user.email}</span>
                            </div>
                            <div className="flex justify-between items-center gap-3 px-4 py-3">
                                <span className="font-medium">Facebook</span>
                                <a href="https://www.facebook.com/jack.willam2003" target="_blank">
                                    <span className="text-gray-600">{}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCardProfile;
