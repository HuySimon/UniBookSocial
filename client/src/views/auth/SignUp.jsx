import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginImg, SignupImg } from '../../assets'
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'
import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { slideUpSignUp } from './animation'
import {useForm} from 'react-hook-form'
const SignUp = () => {

	const [showPassword, setShowPassword] = useState(false)
	const [confirmPassword,setShowConfirmPassword] = useState(false)
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	console.log("re-render")
	return (
		<section
			className='w-full h-screen flex justify-center items-center bg-gray-200'>
			<motion.div
				variants={slideUpSignUp}
				initial={"initial"}
				animate={"animate"}
				exit={"exit"}
				className="w-full md:flex bg-white shadow-lg rounded-2xl max-h-screen md:mx-16 xl:m-0 max-w-lg md:max-w-7xl overflow-hidden">
				<div className={`w-full md:w-1/2 xl:w-[40%] py-16 px-8 md:p-16 text-primary-main transition-all duration-1000 relative`}>
					<p className='  font-bold text-4xl'>Sign up</p>
					<form
						action="" method="post" className='mt-3'>
						<div className="flex flex-col mb-3">
							<label htmlFor="email" className='font-semibold mb-1'>Email</label>
							<input type="email" name="email" id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='border border-primary-900 rounded-md text-primary-main placeholder:text-primary-700 placeholder:text-sm px-4 py-2 w-full' placeholder='Enter your email' />
						</div>
						<div className="flex flex-col mb-3">
							<label htmlFor="email" className='font-semibold mb-1'>Email</label>
							<input type="email" name="email" id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='border border-primary-900 rounded-md text-primary-main placeholder:text-primary-700 placeholder:text-sm px-4 py-2 w-full' placeholder='Enter your email' />
						</div>
						<div className="flex flex-col relative mb-3">
							<label htmlFor="password" className='font-semibold mb-1'>Password</label>
							<input type={`${!showPassword ? "password" : "text"}`} name="password" id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
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
						</div>
						<div className="flex flex-col relative">
							<label htmlFor="confirmPassword" className='font-semibold mb-1'>Confirm Password</label>
							<input type={`${!confirmPassword ? "password" : "text"}`} id="password"
								// onChange={(e) => setPassword(e.target.value)}
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
						</div>
						<button
							type="submit"
							className='w-full py-3 px-14 font-semibold rounded-lg bg-primary-main border transition-all duration-300 border-primary-main hover:bg-transparent hover:text-primary-main text-white mt-5'>
							Sign up
						</button>
						<div className="flex my-4">
							<span className='font-semibold text-black'>Already have account?</span>
							<Link
								to={"/login"}
								className='ml-1 font-semibold text-primary-main hover:underline underline-offset-2'>Login here</Link>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 mt-2 w-full">
							<p className='text-primary-500'>Or, sign up with</p>
							<Link
								className='w-full px-4 py-2 border border-primary-300 rounded-lg
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
