import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Axios from '../../../api/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addUserSchema } from '../../../validations/AddUserValidation';
import { motion } from 'framer-motion';
function AddUserModal({ onClose, onAddUser }) {
	const modalRef = useRef(null);
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phoneNumber: '',
			role: "-1",
			password: '',
		},
		resolver: yupResolver(addUserSchema)
	})
	const handleSaveClick = async (data) => {
		const addUserdata = {
			email: data.email,
			firstName: data.firstName,
			lastName: data.lastName,
			phoneNumber: data.phoneNumber,
			role: data.role,
			password: data.password,
		}
		console.log(addUserdata)
		try {
			const url = `/api/v1/users`;
			const res = await Axios.post(url, addUserdata);
			console.log(res.data.data.data);
			onAddUser(addUserdata);
			onClose();
			if (res.status === 201) {
				toast.success('Thêm người dùng thành công!');
			}
		} catch (error) {
			console.error(error);
		}
	}
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
		<div
			id="addUserModal"
			className="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-opacity-50 bg-black h-webkit-fill-available"
		>
			<motion.div
				ref={modalRef} className="relative w-full max-w-2xl max-h-full">
				{/* <!-- Modal content --> */}
				<form onSubmit={handleSubmit(handleSaveClick)} className="relative bg-white rounded-lg shadow">
					{/* <!-- Modal header --> */}
					<div className="flex items-start justify-between p-4 border-b rounded-t">
						<h3 className="text-xl font-semibold text-gray-900">Add user</h3>
						<AiOutlineClose
							onClick={() => onClose()}
							size={22}
							className="fixed top-4 right-4 text-white cursor-pointer hover:rotate-[360deg] transition-all duration-300 z-20"
						/>
					</div>
					{/* <!-- Modal body --> */}
					<div className="p-6 space-y-6">
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3 relative">
								<label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">
									First Name
								</label>
								<input
									{...register("firstName")}
									type="text"
									id="first-name"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
									placeholder="Bonnie"
								/>
								<p className='text-sm text-red-400 absolute top-full'>{errors.firstName?.message}</p>
							</div>
							<div className="col-span-6 sm:col-span-3 relative">
								<label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">
									Last Name
								</label>
								<input
									{...register("lastName")}
									type="text"
									id="last-name"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
									placeholder="Green"
								/>
								<p className='text-sm text-red-400 absolute top-full '>{errors.lastName?.message}</p>

							</div>
							<div className="col-span-6 sm:col-span-3 relative">
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
									Email
								</label>
								<input
									type="email"
									{...register("email")}
									id="email"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
									placeholder="example@company.com"
								/>
								<p className='text-sm text-red-400 absolute top-full'>{errors.email?.message}</p>

							</div>
							<div className="col-span-6 sm:col-span-3 relative">
								<label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">
									Phone Number
								</label>
								<input

									type="number"
									{...register("phoneNumber")}
									id="phone-number"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
									placeholder="e.g. +(12)3456 789"
								/>
								<p className='text-sm text-red-400 absolute top-full'>{errors.phoneNumber?.message}</p>

							</div>
							<div className="col-span-6 sm:col-span-3 relative">
								<label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 ">
									Role
								</label>
								<select
									{...register("role")}
									id="roles"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5"
								>
									<option disabled value="-1">Choose a role</option>
									<option value="1">User</option>
									<option value="2">Admin</option>
									<option value="3">Post management</option>
								</select>
								<p className='text-sm text-red-400 absolute top-full'>{errors.role?.message}</p>

							</div>
							<div className="col-span-6 sm:col-span-3 relative mb-4">
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
									Password
								</label>
								<input
									type="password"
									{...register("password")}
									id="password"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
									placeholder="••••••••"
								/>
								<p className='text-sm text-red-400 absolute top-full'>{errors.password?.message}</p>
							</div>
						</div>
					</div>
					{/* <!-- Modal footer --> */}
					<div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
						<button
							onClick={handleSaveClick}
							type="submit"
							className="text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Save all
						</button>
					</div>
				</form>
			</motion.div>
		</div>
	);
}

export default AddUserModal;
