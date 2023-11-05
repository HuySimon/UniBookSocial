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
        // <div classNameName="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-opacity-50 bg-black">
        //     <div ref={modalRef} classNameName="relative w-full max-w-2xl max-h-full">
        //         <AiOutlineClose
        //             onClick={() => onClose()}
        //             size={22}
        //             classNameName="fixed top-4 right-4 text-white cursor-pointer hover:rotate-[360deg] transition-all duration-300 z-20"
        //         />
        //         <div classNameName="font-sans leading-tight min-h-screen bg-grey-lighter p-8">
        //             <div classNameName="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        //                 <div
        //                     classNameName="bg-cover h-40"
        //                     style={{
        //                         backgroundImage:
        //                             "url('https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80')",
        //                     }}
        //                 ></div>
        //                 <div classNameName="border-b px-4 pb-6">
        //                     <div classNameName="text-center sm:text-left sm:flex mb-4">
        //                         <img
        //                             classNameName="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
        //                             // eslint-disable-next-line react/prop-types
        //                             src={user.avatar != 'avatarDefault.png' ? user.avatar : AvatarUser}
        //                             alt=""
        //                             onClick={() => setIsZoomImage(true)}
        //                         />
        //                         <div classNameName="py-2">
        //                             {/* eslint-disable-next-line react/prop-types */}
        //                             <h3 classNameName="font-bold text-2xl mb-1">{user.username}</h3>
        //                             <div classNameName="inline-flex text-grey-dark sm:flex items-center">
        //                                 <svg
        //                                     classNameName="h-5 w-5 text-grey mr-1"
        //                                     fill="currentColor"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     viewBox="0 0 24 24"
        //                                     width="24"
        //                                     height="24"
        //                                 >
        //                                     <path
        //                                         classNameName="heroicon-ui"
        //                                         d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        //                                     />
        //                                 </svg>
        //                                 New York, NY
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div classNameName="flex">
        //                         <button classNameName="flex-1 rounded-full bg-blue text-white antialiased font-bold hover:bg-blue-dark px-4 py-2 mr-2">
        //                             Follow
        //                         </button>
        //                         <button classNameName="flex-1 rounded-full border-2 border-grey font-semibold text-black px-4 py-2">
        //                             Message
        //                         </button>
        //                     </div>
        //                 </div>
        //                 <div classNameName="px-4 py-4">
        //                     {/* <div classNameName="flex items-center text-grey-darker mb-4">
        //     <svg classNameName="h-6 w-6 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path classNameName="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
        //     <span><strong classNameName="text-black">12</strong> Followers you know</span>
        // </div>
        // <div classNameName="flex">
        //     <div classNameName="flex flex-row-reverse justify-end mr-2">
        //       <img classNameName="border-2 border-white rounded-full h-10 w-10" src="https://randomuser.me/api/portraits/men/32.jpg" alt=""/>
        //       <img classNameName="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/women/31.jpg" alt=""/>
        //       <img classNameName="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/men/33.jpg" alt=""/>
        //       <img classNameName="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/women/32.jpg" alt=""/>
        //       <img classNameName="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/men/44.jpg" alt=""/>
        //       <img classNameName="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/women/42.jpg" alt=""/>
        //     </div>
        //       <span classNameName="flex items-center justify-center text-sm text-grey-darker font-semibold border-2 border-grey-light rounded-full h-10 w-10">+3</span>
        // </div> */}
        //                     <div classNameName="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
        //                         <a classNameName="link opacity-100 hover:opacity-50" href="#" target="_blank">
        //                             <img src="https://img.icons8.com/color/30/000000/linkedin-circled.png" />
        //                         </a>
        //                         <a classNameName="link opacity-100 hover:opacity-50" href="#" target="_blank">
        //                             <img src="https://img.icons8.com/color/30/000000/facebook-circled.png" />
        //                         </a>
        //                         <a classNameName="link opacity-100 hover:opacity-50" href="#" target="_blank">
        //                             <img src="https://img.icons8.com/color/30/000000/twitter-circled.png" />
        //                         </a>
        //                         <a classNameName="link opacity-100 hover:opacity-50" href="#" target="_blank">
        //                             <img src="https://img.icons8.com/cute-clipart/30/000000/instagram-new.png" />
        //                         </a>
        //                         <a classNameName="link opacity-100 hover:opacity-50" href="#" target="_blank">
        //                             <img src="https://img.icons8.com/color/30/000000/youtube-play.png" />
        //                         </a>
        //                         <a classNameName="link opacity-100 hover:opacity-50" href="#" target="_blank">
        //                             <img src="https://img.icons8.com/color/30/000000/gitlab.png" />
        //                         </a>
        //                         <a classNameName="link opacity-100 hover:opacity-50" href="#" target="_blank">
        //                             <img src="https://img.icons8.com/ios-filled/30/000000/github.png" />
        //                         </a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {isZoomImage && (
        //         <>
        //             <div classNameName="fixed inset-0 w-screen h-screen bg-black z-30">
        //                 <div classNameName="w-full h-full py-[100px] px-[300px]">
        //                     <img
        //                         src={user.avatar != 'avatarDefault.png' ? user.avatar : AvatarUser}
        //                         alt=""
        //                         classNameName="w-full h-full object-contain"
        //                     />
        //                 </div>
        //                 <AiOutlineClose
        //                     onClick={() => setIsZoomImage(false)}
        //                     classNameName="absolute top-4 right-10 bg-white p-2 rounded-full cursor-pointer hover:bg-white/90 transition-all"
        //                     size={40}
        //                 />
        //             </div>
        //         </>
        //     )}
        // </div>
        <div className="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-opacity-50 bg-black h-webkit-fill-available">
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
                                src={user.coverImage != 'coverImageDefault.png' ? user.coverImage : SignupImg}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-28 h-28 rounded-full overflow-hidden absolute left-0 right-0 top-[14vh] mx-auto">
                            <img
                                src={user.avatar != 'avatarDefault.png' ? user.avatar : AvatarUser}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col text-center mt-14 pb-3 border-b border-gray-500">
                            <p className="font-medium text-xl">{user.username}</p>
                            <p className="text-sm text-gray-500 px-16">Freelance Desginer and Front-end Developer</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center gap-3 px-4 py-3 border-b border-gray-500">
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
                                    <span className="text-gray-600">Jack Phat</span>
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
