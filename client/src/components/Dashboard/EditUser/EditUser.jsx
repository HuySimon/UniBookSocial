// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types, no-unused-vars
function EditUser({ data, onUpdateUser, onClose }) {
	const [role, setRole] = useState(data[2]);
	const [status, setStatus] = useState(data[3])
	const modalRef = useRef(null);
	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			onClose([false, 0, 0]);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	console.log(role, status)
	return (
		<div
			id="editUserModal"
			tabIndex="-1"
			aria-hidden="true"
			className="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-opacity-50 bg-black h-webkit-fill-available"
		>
			<div ref={modalRef} className="relative w-full max-w-2xl max-h-full">
				{/* <!-- Modal content --> */}
				<form action="#" className="relative bg-white rounded-lg shadow">
					{/* <!-- Modal header --> */}
					<div className="flex items-start justify-between p-4 border-b rounded-t">
						<h3 className="text-xl font-semibold text-gray-900">Edit user</h3>
						<AiOutlineClose
							onClick={() => onClose([false, 0, 0])}
							size={22}
							className="fixed top-4 right-4 text-white cursor-pointer hover:rotate-[360deg] transition-all duration-300 z-20"
						/>
					</div>
					{/* <!-- Modal body --> */}
					<div className="p-6 space-y-6">
						<div className="flex flex-col gap-3 w-1/2">
							<label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 ">
								Role
							</label>
							<select
								id="role"
								defaultValue={data[2]}
								onChange={(e) => {
									setRole(e.target.value)
								}}
								name="role"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5">
								<option value="1">User</option>
								<option value="2">Admin</option>
								<option value="3">Post management</option>
							</select>
							<select
								id="status"
								defaultValue={data[3]}
								onChange={(e) => {
									setStatus(e.target.value)
								}}
								name="role"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5">
								<option value="Active">Active</option>
								<option value="Disabled">Disabled</option>
							</select>
							<button type="button" className='w-fit px-3 py-2 bg-red-500 rounded-md text-white'>Reset Password</button>
						</div>
					</div>
					{/* <!-- Modal footer --> */}
					<div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
						<button
							onClick={() => {
								onUpdateUser(
									data[1], {
									role: role,
									status: status
								}
								)
							}}
							type="button"
							className="text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditUser;
