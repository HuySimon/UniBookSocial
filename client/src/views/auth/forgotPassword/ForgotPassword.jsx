import React, { useState } from 'react'
import { Logo } from '../../../assets'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ForgotPassword = ({ isVisible, setIsVisible }) => {
	const [stepTwo, setStepTwo] = useState(false)
	const [stepThree, setStepThree] = useState(false)
	return (
		<>
			<div
				className="w-full h-screen bg-gray-200 flex justify-center items-center">
				<motion.div
					initial={{
						y: "30%",
						opacity: 0
					}}
					animate={{
						y: 0,
						opacity: 0.75,
						transition: {
							duration: 1,
							ease: [0.36, 0, 0.66, 1],
							type: "spring",
						}
					}}
					className="w-[35em] h-[35em] bg-white rounded-md shadow-lg relative">
					<div
						className="w-full h-full flex flex-col">
						<div className="w-full h-1/2">
							<img src={Logo} alt="" className='w-full h-full object-contain' />
						</div>
						<motion.form 
						// initial={{
						// 	x: 0,
						// 	opacity: 1
						// }}
						// exit={ stepTwo && {
						// 	x: "50%",
						// 	opacity: 0,
						// 	transition: {
						// 		duration: 0.5
						// 	}
						// }}
						className="w-1/2 flex flex-col items-center mx-auto">
							<span className='font-medium text-3xl'>Forgot Password?</span>
							<p className='text-sm text-gray-500 text-center my-3'>Enter your email and we'll send you an OTP to get back your password</p>
							<input type="text" name="recover-email" id="recover-email" className='w-full px-4 py-2 mb-4 border border-gray-500 text-black rounded-md placeholder:text-sm' placeholder='Enter your email' />
							<input 
							type="submit" value="Send OTP" className='w-full py-3 text-center bg-primary-800 text-sm font-medium hover:bg-primary-700 transition-all text-white rounded-md' />
						</motion.form>
					</div>
					<Link
						to={"/login"}
						className='absolute top-4 right-4 rotate-0 hover:rotate-[360deg] transition-all duration-500'
					>
						<AiOutlineClose />
					</Link>
				</motion.div>
			</div>
		</>
	)
}

export default ForgotPassword