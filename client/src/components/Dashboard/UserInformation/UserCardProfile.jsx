// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { AvatarUser, SignupImg } from '../../../assets';
import { set } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
function UserCardProfile({ onClose, user }) {
	const [role, setRole] = useState(user.roleData)
	const modalRef = useRef(null);
	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			onClose([false, null]);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	console.log(role)
	return (
		<div className="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-hidden md:inset-0 max-h-full bg-opacity-50 bg-black">
			<div ref={modalRef} className="relative w-full max-w-3xl max-h-full">
				<div className="w-full flex justify-center items-center">
					<div className="w-full bg-white rounded-lg overflow-hidden border border-gray-400 relative shadow-md">
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
						<div className="w-full grid grid-cols-2 grid-rows-3 mt-16">
							{["firstName", "lastName", "username", "phoneNumber", "email", "linkFacebook", "linkZalo", "linkInstagram", "role", "status"].map((field) => (
								<div key={field} className={`w-full h-full flex justify-between items-center relative mb-2 border p-2`}>
									<span
										htmlFor={field} className='w-2/5 font-medium first-letter:uppercase'>{
											field === "linkZalo" ? "Zalo" : field.replace(/([a-z])([A-Z])/g, '$1 $2')
										}:</span>
									<span className='w-4/5 rounded-md px-3 py-2 text-black'>{field === "role" ? role.name : user[field]}</span>
								</div>
							))}
						</div>
						<AiOutlineClose
							onClick={() => onClose([false, null])}
							size={40}
							className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white cursor-pointer hover:rotate-[720deg] transition-all duration-700 z-20"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserCardProfile;
