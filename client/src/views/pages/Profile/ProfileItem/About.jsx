import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from '../../../../api/index'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const About = () => {

	const [currentUser, setCurrentUser] = useState({});
	const navigate = useNavigate()
	useEffect(() => {
		Axios.get('/api/v1/users/me').then(res => {
			setCurrentUser(res.data.data.data)
			console.log(res.data.data.data)
		}).catch(err => {
			toast.error("Can't get user information")
			navigate('/')
		})
	}, [])

	const changePasswordSchema = Yup.object().shape({
		passwordCurrent: Yup.string().required("Please enter old password").trim(),
		password: Yup.string().required("Please enter password").matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			"Password must contain at least 8 characters, one uppercase, one number and one special case character.Ex(John123@)"
		),
		passwordConfirm: Yup.string().required("Please enter confirm password").oneOf([Yup.ref('password')], 'Confirm Password not match!!')
	})

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			passwordCurrent: "",
			password: "",
			passwordConfirm: ""
		},
		resolver: yupResolver(changePasswordSchema)
	})
	const onSubmitChangePassword = (data) => {
		const passwords = {
			passwordCurrent: data.passwordCurrent,
			password: data.password,
			passwordConfirm: data.passwordConfirm
		}
		Axios.patch('/api/v1/users/updateMyPassword', passwords).then(res => {
			if (res.status === 200) {
				toast.success("Change password success!")
			}
			console.log(res)
			console.log(res.data)
		}).catch(err => {
			console.log(err.response)
			toast.error(err.response.data.message)
		})
	}
	const personalInfor = [
		{
			title: "Name",
			value: (currentUser.firstName + " " + currentUser.lastName)
		},
		{
			title: "Phone",
			value: currentUser.phoneNumber
		},
		{
			title: "Email",
			value: currentUser.email
		},
		{
			title: "Facebook",
			value: (currentUser.linkFacebook === null ? "" : currentUser.linkFacebook)
		},
		{
			title: "Instagram",
			value: (currentUser.linkInstagram === null ? "" : currentUser.linkInstagram)
		},
		{
			title: "Zalo",
			value: (currentUser.linkZalo === null ? "" : currentUser.linkZalo)
		}
	]
	return (
		<div className='w-full h-full'>
			<form
				action=""
				className='w-full flex flex-col gap-5'>
				{
					personalInfor.map((item, index) => (
						<div
							key={index}
							className="flex justify-between items-center">
							<label htmlFor="name" className='w-1/4 font-medium'>{item.title}</label>
							<input type="text" className='w-3/4 rounded-md px-3 py-2 text-black' value={item.value} />
						</div>
					))
				}
				<div className="flex justify-between items-start">
					<label htmlFor="bio" className='w-1/4 font-medium'>Bio</label>
					<textarea name="" id="" cols="30" rows="7" className='px-3 py-2 border border-[#a0a0a0] rounded-md w-3/4'></textarea>
				</div>
				<button
					type="submit"
					disabled
					className='w-fit bg-primary-main px-8 py-2 text-white hover:bg-primary-800 cursor-pointer transition-all rounded-md'> Submit
				</button>
			</form>
			<form
				onSubmit={handleSubmit(onSubmitChangePassword)}
				className='py-8'>
				<span className='text-xl'>Change Password</span>
				<div className="flex flex-col gap-3 mt-4">
					<div className="flex justify-between items-center">
						<label htmlFor="" className='w-1/4 font-medium'>Old Password</label>
						<input type="password" {...register("passwordCurrent")} className='w-3/4 rounded-md px-3 py-2 text-black' />
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="" className='w-1/4 font-medium'>New Password</label>
						<input type="password" {...register("password")} className='w-3/4 rounded-md px-3 py-2 text-black' />
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="" className='w-1/4 font-medium'>Confirm New Password</label>
						<input type="password" {...register("passwordConfirm")} className='w-3/4 rounded-md px-3 py-2 text-black' />
					</div>
				</div>
				<button
					type="submit"
					onClick={() => {
						toast.error(errors.passwordCurrent?.message)
						toast.error(errors.password?.message)
						toast.error(errors.passwordConfirm?.message)
					}}
					className='w-fit bg-primary-main px-8 py-2 mt-5 text-white hover:bg-primary-800 cursor-pointer transition-all rounded-md'> Submit
				</button>
			</form>
		</div>
	)
}

export default About