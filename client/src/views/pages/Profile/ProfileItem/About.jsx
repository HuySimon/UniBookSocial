import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../../../../hooks/useAuthContext'
const About = () => {

	const currentUser = JSON.parse(localStorage.getItem("user"))
	const personalInfor = [
		{
			title: "Name",
			value: (currentUser.user.firstName + " " + currentUser.user.lastName)
		},
		{
			title: "Phone",
			value: currentUser.user.phoneNumber
		},
		{
			title: "Email",
			value: currentUser.user.email
		},
		{
			title: "Facebook",
			value: (currentUser.user.linkFacebook === null ? "" : currentUser.user.linkFacebook)
		},
		{
			title: "Instagram",
			value: (currentUser.user.linkInstagram === null ? "" : currentUser.user.linkInstagram)
		},
		{
			title: "Zalo",
			value: (currentUser.user.linkZalo === null ? "" : currentUser.user.linkZalo)
		}
	]
	const { register, handleSubmit, formState: { errors } } = useForm()
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

			<form className='py-8'>
				<span className='text-xl'>Change Password</span>
				<div className="flex flex-col gap-3 mt-4">
					<div className="flex justify-between items-center">
						<label htmlFor="" className='w-1/4 font-medium'>Old Password</label>
						<input type="password" name="old-password" id="old-password" className='w-3/4 rounded-md px-3 py-2 text-black' />
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="" className='w-1/4 font-medium'>New Password</label>
						<input type="password" name="new-password" id="new-password" className='w-3/4 rounded-md px-3 py-2 text-black' />
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="" className='w-1/4 font-medium'>Confirm New Password</label>
						<input type="password" name="confirm-new-password" id="confirm-new-password" className='w-3/4 rounded-md px-3 py-2 text-black' />
					</div>
				</div>
				<button
					type="submit"
					disabled
					className='w-fit bg-primary-main px-8 py-2 mt-5 text-white hover:bg-primary-800 cursor-pointer transition-all rounded-md'> Submit
				</button>
			</form>
		</div>
	)
}

export default About