import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import Axios from '../../../api/index'
import { yupResolver } from '@hookform/resolvers/yup'
import { ImSpinner9 } from 'react-icons/im'
import { toast } from 'react-toastify'
import { useAuthContext } from '../../../hooks/useAuthContext'
const SendEmail = ({ title, handleNextStep }) => {

	const emailValidation = Yup.object().shape({
		email: Yup.string().trim().email("Invalid Email Format").required("Please enter email")
	})
	const [isLoading, setIsLoading] = useState(false)
	const [state, dispatch] = useAuthContext()
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			email: ""
		}
		, resolver: yupResolver(emailValidation)
	})

	const onSubmit = (data) => {
		setIsLoading(true)
		const user = {
			email: data.email
		}
		Axios.post('/api/v1/users/forgotPassword', user).then(res => {
			console.log(res)
			dispatch({ type: "RESET_PASSWORD", value: res.data.resetToken, email: data.email })
			toast.success("OTP has been sent to your email")
			handleNextStep()
			setIsLoading(false)
		}).catch(err => {
			console.log(err.response)
			toast.error(err.response.message)
			setIsLoading(false)
		})
	}

	return (
		<motion.form
			onSubmit={handleSubmit(onSubmit)}
			initial={{
				x: "40%",
				opacity: 0,
				transition: {
					duration: 0.35,
					ease: [0.32, 0, 0.67, 0]
				}
			}}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					duration: 0.35,
					ease: [0.32, 0, 0.67, 0]
				}
			}}
			exit={{
				x: "-40%",
				opacity: 0,
				transition: {
					duration: 0.35,
					ease: [0.32, 0, 0.67, 0]
				}
			}}
			className="w-1/2 flex flex-col items-center mx-auto">
			<span className='font-medium text-3xl'>{title}</span>
			<p className='text-sm text-gray-500 text-center my-3'>Enter your email and we'll send you an OTP to get back your password</p>
			<input type="text" {...register("email")} className='w-full px-4 py-2 mb-4 border border-gray-500 text-black rounded-md placeholder:text-sm' placeholder='Enter your email' />
			<button
				onClick={() => toast.error(errors.email?.message)}
				type="submit" className='w-full h-[50px] flex justify-center items-center py-3 text-center bg-primary-800 text-sm font-medium hover:bg-primary-700 transition-all text-white rounded-md'
			>
				{
					isLoading ? <ImSpinner9 className='animate-spin duration-500' /> : "Send OTP"
				}
			</button>
		</motion.form>
	)
}

export default SendEmail