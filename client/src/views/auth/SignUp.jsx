import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginImg, SignupImg } from '../../assets'
import { ImSpinner9 } from 'react-icons/im'
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'
import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { slideUpSignUp } from './animation'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from '../../api'
const SignUp = () => {

	const [showPassword, setShowPassword] = useState(false)
	const [confirmPassword, setShowConfirmPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()

	const validationSchema = Yup.object().shape({
		email: Yup.string().lowercase().trim().email("Invalid email format").required("Please enter email"),
		firstName: Yup.string().trim().required("Please enter first name"),
		lastName: Yup.string().trim().required("Please enter last name"),
		phoneNumber: Yup.string().required("Please enter phone number").matches(
			/^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
			"Invalid Phone Number"
		),
		password: Yup.string().required("Please enter password").matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			"Password must contain at least 8 characters, one uppercase, one number and one special case character.Ex(John123@)"
		),
		confirmPassword: Yup.string().required("Please enter confirm password").oneOf([Yup.ref('password')], 'Password not match!!')

	});
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			confirmPassword: ""
		},
		resolver: yupResolver(validationSchema)
	})

	const onSubmit = (data) => {
		const newUser = {
			email: data.email,
			firstName: data.firstName,
			lastName: data.lastName,
			password: data.password,
			phoneNumber: data.phoneNumber
		}
		setIsLoading(true)
		console.log(newUser)
		Axios.post('/api/v1/users/signup', newUser).then(res => {
			if (res.status === 201) {
				toast.success("Signup successful!")
				// navigate('/login')
				console.log(res)
				console.log(res.data)
			}
			setIsLoading(false)
		}).catch((err) => {
			toast.error("Failed to sign up")
			setIsLoading(false)
		})
	}

	return (
		<section
			className='w-full h-screen flex justify-center items-center bg-gray-100'>
			<motion.div
				variants={slideUpSignUp}
				initial={"initial"}
				animate={"animate"}
				exit={"exit"}
				className="w-full md:flex bg-white shadow-lg rounded-2xl max-h-screen md:mx-16 xl:m-0 max-w-lg md:max-w-7xl overflow-hidden">
				<div className={`w-full md:w-1/2 xl:w-[40%] py-16 px-8 md:p-16 text-primary-main transition-all duration-1000 relative`}>
					<p className='  font-bold text-4xl'>Sign up</p>
					<form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
						<div className="flex justify-between items-center gap-5">
							<div className="flex flex-col mb-6 relative">
								<label htmlFor="firstName" className='font-semibold mb-1'>First Name</label>
								<input type="text" {...register("firstName")}
									className='border border-primary-900 rounded-md text-primary-main placeholder:text-primary-700 placeholder:text-sm px-4 py-2 w-full' placeholder='Enter your first name' />
								<p className='absolute -bottom-5 text-[12px] text-red-600'>{errors.firstName?.message}</p>
							</div>
							<div className="flex flex-col mb-6 relative">
								<label htmlFor="email" className='font-semibold mb-1'>Last Name</label>
								<input type="text" {...register("lastName")}
									className='border border-primary-900 rounded-md text-primary-main placeholder:text-primary-700 placeholder:text-sm px-4 py-2 w-full' placeholder='Enter your last name' />
								<p className='absolute -bottom-5 text-[12px] text-red-600'>{errors.lastName?.message}</p>
							</div>
						</div>
						<div className="flex flex-col mb-6 relative">
							<label htmlFor="email" className='font-semibold mb-1'>Email</label>
							<input {...register("email")}
								className='border border-primary-900 rounded-md text-primary-main placeholder:text-primary-700 placeholder:text-sm px-4 py-2 w-full' placeholder='Enter your email' />
							<p className='absolute -bottom-5 text-[12px] text-red-600'>{errors.email?.message}</p>
						</div>
						<div className="flex flex-col mb-6 relative">
							<label htmlFor="phoneNumber" className='font-semibold mb-1'>Phone Number</label>
							<input {...register("phoneNumber")}
								className='border border-primary-900 rounded-md text-primary-main placeholder:text-primary-700 placeholder:text-sm px-4 py-2 w-full' placeholder='Enter your phone number' />
							<p className='absolute -bottom-5 text-[12px] text-red-600'>{errors.phoneNumber?.message}</p>
						</div>
						<div className="flex flex-col relative mb-6 ">
							<label htmlFor="password" className='font-semibold mb-1'>Password</label>
							<input type={`${!showPassword ? "password" : "text"}`} {...register("password")}
								className='border border-primary-900 rounded-md text-primary-main placeholder:text-primary-700 placeholder:text-sm px-4 py-2 w-full' placeholder='Enter your password' />
							{
								!showPassword ? (
									<PiEyeBold
										onClick={() => setShowPassword(!showPassword)}
										size={22} className='absolute top-[55%] right-3 cursor-pointer' />
								) : (
									<PiEyeClosedBold
										onClick={() => setShowPassword(!showPassword)}
										size={22} className='absolute top-[55%] right-3 cursor-pointer' />
								)
							}
							<p className='absolute -bottom-5 text-[12px] text-red-600'>{errors.password?.message}</p>
						</div>
						<div className="flex flex-col relative mb-3">
							<label htmlFor="confirmPassword" className='font-semibold mb-1'>Confirm Password</label>
							<input type={`${!confirmPassword ? "password" : "text"}`} {...register("confirmPassword")}
								className='border border-primary-900 rounded-md text-primary-main placeholder:text-primary-700 placeholder:text-sm px-4 py-2 w-full' placeholder='Enter your password' />
							{
								!confirmPassword ? (
									<PiEyeBold
										onClick={() => setShowConfirmPassword(!confirmPassword)}
										size={22} className='absolute top-[55%] right-3 cursor-pointer' />
								) : (
									<PiEyeClosedBold
										onClick={() => setShowConfirmPassword(!confirmPassword)}
										size={22} className='absolute top-[55%] right-3 cursor-pointer' />
								)
							}
							<p className='absolute -bottom-5 text-[12px] text-red-600'>{errors.confirmPassword?.message}</p>
						</div>
						<button
							type="submit"
							className='w-full h-[50px] flex justify-center items-center py-3 px-14 font-semibold rounded-lg bg-primary-main border transition-all duration-300 border-primary-main hover:bg-transparent hover:text-primary-main text-white mt-6'>
							{
								isLoading ? <ImSpinner9 className='animate-spin duration-500' /> : "Sign up"
							}
						</button>
						<div className="flex my-4">
							<span className='font-semibold text-black'>Already have account?</span>
							<Link
								to={"/login"}
								className='ml-1 font-semibold text-primary-main hover:underline underline-offset-2'>Login here</Link>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 mt-2 w-full">
							<p className='text-black'>Or, sign up with</p>
							<Link
								className='w-full px-4 py-2 border border-primary-900 rounded-lg
                                            transition-all hover:bg-primary-900 hover:text-white
                                            flex justify-center items-center gap-2 font-semibold
                                            '
							>
								<FcGoogle size={22} />
								Sign up with Google
							</Link>
						</div>
					</form>
				</div>
				<div className="hidden md:block md:w-1/2 xl:w-[60%] p-3 z-10">
					<img src={SignupImg} alt="" className='rounded-2xl w-full h-full object-cover' />
				</div>
			</motion.div>
		</section>
	)
}

export default SignUp
