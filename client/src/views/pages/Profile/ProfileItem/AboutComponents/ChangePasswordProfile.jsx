import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { changePasswordSchema } from '../../../../../validations/ProfileValidation'

const ChangePasswordProfile = () => {

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
	return (
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
	)
}

export default ChangePasswordProfile