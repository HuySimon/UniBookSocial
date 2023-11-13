import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from '../../../../api/index'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import ChangePasswordProfile from './AboutComponents/ChangePasswordProfile'
import { changeInformationSchema } from '../../../../validations/ProfileValidation'

function isObjectEmpty(obj) {
	return Object.keys(obj).length === 0;
}

const About = () => {

	const [currentUser, setCurrentUser] = useState({});
	const userID = useParams()
	const [state, dispatch] = useAuthContext()
	const [edit, setEdit] = useState(false)
	const handleEdit = () => {
		setEdit(!edit)
	}
	const navigate = useNavigate()

	const preloadValueUser = {
		firstName: currentUser.firstName,
		lastName: currentUser.lastName,
		email: currentUser.email,
		phoneNumber: currentUser.phoneNumber,
		linkFacebook: currentUser.linkFacebook,
		linkInstagram: currentUser.linkInstagram,
		linkZalo: currentUser.linkZalo
	}

	const { register, handleSubmit, trigger, reset, formState: { errors, dirtyFields, isValid }, getValues } = useForm(
		{
			defaultValues: preloadValueUser,
			resolver: yupResolver(changeInformationSchema),
		})

	useEffect(() => {
		Axios.get(`/api/v1/users/${userID.id}`).then(res => {
			setCurrentUser(res.data.data.data)
		}).catch(err => {
			toast.error(err.response.message)
			navigate('/')
		})
	}, [userID.id])

	const handleEditInformation = async (data) => {
		const fieldsToTrack = [
			'firstName',
			'lastName',
			'email',
			'phoneNumber',
			'linkFacebook',
			'linkInstagram',
			'linkZalo',
		];

		const curUser = {};

		fieldsToTrack.forEach((fieldName) => {
			if (dirtyFields[fieldName]) {
				curUser[fieldName] = getValues(fieldName);
				trigger(fieldName);
			}
		});
		console.log(curUser)
		if (isObjectEmpty(curUser)) {
			toast.error("You haven't changed anything");
		} else {
			try {
				const response = await Axios.patch('/api/v1/users/updateMe', curUser);
				if (response.status === 200) {
					toast.success("Edit information success!");
				}
			} catch (err) {
				console.log(err)
				toast.error(err.response.data.message);
				// console.error(err.response);
			}
		}
	}


	return (
		<div className='w-full h-screen'>
			<form
				onSubmit={handleSubmit(handleEditInformation)}
				className='w-full flex flex-col gap-5 mb-2'>
				<div className="flex justify-between items-center relative mb-2">
					<label htmlFor="name" className='w-1/4 font-medium'>First Name</label>
					<input type="text"
						disabled={edit ? false : true}
						{...register("firstName")}
						defaultValue={currentUser.firstName}
						className='w-3/4 rounded-md px-3 py-2 text-black' />
					<p className='text-[12px] text-red-600 absolute top-[46px] left-1/4'>{errors.firstName?.message}</p>
				</div>
				<div className="flex justify-between items-center relative mb-2">
					<label htmlFor="name" className='w-1/4 font-medium'>Last Name</label>
					<input type="text"
						disabled={edit ? false : true}
						defaultValue={currentUser.lastName}
						{...register("lastName")} className='w-3/4 rounded-md px-3 py-2 text-black' />
					<p className='text-[12px] text-red-600 absolute top-[46px] left-1/4'>{errors.lastName?.message}</p>
				</div>
				<div className="flex justify-between items-center relative mb-2">
					<label htmlFor="phoneNumber" className='w-1/4 font-medium'>Phone</label>
					<input type="text"
						disabled={edit ? false : true}
						defaultValue={currentUser.phoneNumber}
						{...register("phoneNumber")} className='w-3/4 rounded-md px-3 py-2 text-black' />
					<p className='text-[12px] text-red-600 absolute top-[46px] left-1/4'>{errors.phoneNumber?.message}</p>
				</div>
				<div className="flex justify-between items-center relative mb-2">
					<label htmlFor="email" className='w-1/4 font-medium'>Email</label>
					<input type="text"
						disabled={edit ? false : true}
						defaultValue={currentUser.email}
						{...register("email")} className='w-3/4 rounded-md px-3 py-2 text-black' />
					<p className='text-[12px] text-red-600 absolute top-[46px] left-1/4'>{errors.email?.message}</p>
				</div>
				<div className="flex justify-between items-center relative mb-2">
					<label htmlFor="linkFacebook" className='w-1/4 font-medium'>Facebook</label>
					<input type="text"
						disabled={edit ? false : true}
						defaultValue={currentUser.linkFacebook}
						{...register("linkFacebook")} className='w-3/4 rounded-md px-3 py-2 text-black' />
					<p className='text-[12px] text-red-600 absolute top-[46px] left-1/4'>{errors.linkFacebook?.message}</p>
				</div>
				<div className="flex justify-between items-center relative mb-2">
					<label htmlFor="linkZalo" className='w-1/4 font-medium'>Zalo</label>
					<input type="text"
						disabled={edit ? false : true}
						defaultValue={currentUser.linkZalo}
						{...register("linkZalo")} className='w-3/4 rounded-md px-3 py-2 text-black' />
					<p className='text-[12px] text-red-600 absolute top-[46px] left-1/4'>{errors.linkZalo?.message}</p>
				</div>
				<div className="flex justify-between items-center relative mb-2">
					<label htmlFor="linkInstagram" className='w-1/4 font-medium'>Instagram</label>
					<input type="text"
						disabled={edit ? false : true}
						defaultValue={currentUser.linkInstagram}
						{...register("linkInstagram")} className='w-3/4 rounded-md px-3 py-2 text-black' />
					<p className='text-[12px] text-red-600 absolute top-[46px] left-1/4'>{errors.linkInstagram?.message}</p>
				</div>
				{
					(Object.entries(state.user).length > 0 && (state.user.user.id === currentUser.id) && (
						<div className="flex gap-5">
							<button
								type='button'
								onClick={handleEdit}
								className='w-28 bg-primary-main px-8 py-2 text-white hover:bg-primary-800 cursor-pointer transition-all rounded-md'>
								{
									edit ? 'Cancel' : 'Edit'
								}
							</button>
							<button
								type="submit"
								disabled={!edit ? true : false}
								className={`w-28 px-8 py-2 cursor-pointer transition-all rounded-md ${edit ? 'bg-primary-main text-white hover:bg-primary-800 cursor-pointer' : 'bg-gray-200 text-white cursor-not-allowed'}`}> Submit
							</button>
						</div>
					))
				}
			</form>
			{
				(Object.entries(state.user).length) > 0 && (state.user.user.id === currentUser.id) && (
					<>
						<ChangePasswordProfile />
					</>
				)
			}
		</div>
	)
}

export default About