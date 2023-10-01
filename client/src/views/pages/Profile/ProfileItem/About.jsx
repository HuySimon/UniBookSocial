import React from 'react'
import { useForm } from 'react-hook-form'
const About = () => {

	const personalInfor = [
		{
			title: "Name",
			type: "text"
		},
		{
			title: "Phone"
		},
		{
			title: "Email"
		},
		{
			title: "Facebook"
		},
		{
			title: "Instagram"
		},
		{
			title: "Zalo"
		},
		{
			title: "Twitter"
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
						<div className="flex justify-between items-center">
							<label htmlFor="name" className='w-1/4 font-medium'>{item.title}</label>
							<input type="text" className='w-3/4 rounded-md px-3 py-2 text-black' />
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
					className='w-fit bg-primary-main px-8 py-2 text-white hover:bg-primary-800 transition-all rounded-md'> Submit
				</button>
			</form>
		</div>
	)
}

export default About