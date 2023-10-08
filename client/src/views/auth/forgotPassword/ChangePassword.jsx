import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from '../../../api/index'
import * as Yup from 'yup'
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
const ChangePassword = ({ title }) => {

	const [state, dispatch] = useAuthContext()
	const navigate = useNavigate()
	const newPasswordSchema = Yup.object().shape({
		password: Yup.string().required("Please enter password").matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			"Password must contain at least 8 characters, one uppercase, one number and one special case character.Ex(John123@)"
		),
		confirmPassword: Yup.string().required("Please enter confirm password").oneOf([Yup.ref('password')], 'Password not match!!')
	})
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			password: "",
			confirmPassword: ""
		},
		resolver: yupResolver(newPasswordSchema)
	});

	const onSubmit = (data) => {
		const newPassword = {
			password: data.password,
			confirmPassword: data.confirmPassword
		}
		Axios.patch(`/api/v1/users/resetPassword/${state.resetToken}`, newPassword).then(res => {
			toast.success("Change password success!")
			navigate('/login')
			// console.log(res)
			// console.log(res.data)
		}).catch(err => {
			// console.log(err.response)
			toast.error("Change password failed!!")
		})
	}
	return (
		<motion.form
			onSubmit={handleSubmit(onSubmit)}
			initial={{
				x: "50%",
				opacity: 0
			}}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					duration: 0.5,
					ease: [0.32, 0, 0.67, 0]
				}
			}}
			exit={{
				x: "50%",
				opacity: 0,
				transition: {
					duration: 0.35,
					ease: [0.32, 0, 0.67, 0]
				}
			}}
			className="w-[60%] flex flex-col items-center mx-auto">
			<span className='font-medium text-3xl mb-3'>{title}</span>
			<input type="password" {...register("password")} className='w-full px-4 py-2 mb-4 border border-gray-500 text-black rounded-md placeholder:text-sm' placeholder='New Password' />
			<input type="password" {...register("confirmPassword")} className='w-full px-4 py-2 border border-gray-500 text-black rounded-md placeholder:text-sm' placeholder='Confirm New Password' />
			<p className='text-sm text-gray-500 text-left my-2'>Password must contain at least 8 characters, one uppercase, one number and one special case character.Ex(John123@)</p>
			<input
				type="submit" value="Submit" className='w-full py-3 text-center bg-primary-800 text-sm font-medium hover:bg-primary-700 transition-all text-white rounded-md' />
		</motion.form>
	)
}

export default ChangePassword