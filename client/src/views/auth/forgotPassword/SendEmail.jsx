import React from 'react'
import { motion } from 'framer-motion'
const SendEmail = ({ title, handleNextStep }) => {
	return (
		<motion.form
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
			<input type="text" name="recover-email" id="recover-email" className='w-full px-4 py-2 mb-4 border border-gray-500 text-black rounded-md placeholder:text-sm' placeholder='Enter your email' />
			<input
				type="submit" value="Send OTP" className='w-full py-3 text-center bg-primary-800 text-sm font-medium hover:bg-primary-700 transition-all text-white rounded-md'
			/>
		</motion.form>
	)
}

export default SendEmail