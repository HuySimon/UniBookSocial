import React, { useState } from 'react'
import { Logo } from '../../../assets'
import { AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import SendEmail from './SendEmail'
import ConfirmOTP from './ConfirmOTP'
import ChangePassword from './ChangePassword'
const ForgotPassword = ({ isVisible, setIsVisible }) => {
	const [step, setStep] = useState(0)
	const handleNextStep = () => {
		setStep(step + 1)
	}
	const handlePrevStep = () => {
		setStep(step - 1)
	}
	const PageDisplay = () => {
		if (step == 0) {
			return <SendEmail title={"ForgotPassword"} handleNextStep={handleNextStep} />
		} else if (step == 1) {
			return <ConfirmOTP ttile={"Email Verfication Sent"} handlePrevStep={handlePrevStep} />
		} else {
			return <ChangePassword />
		}
	}
	console.log(step)
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
						<AnimatePresence mode='wait'>
							{PageDisplay()}
						</AnimatePresence>
					</div>
					<Link
						to={"/login"}
						className='absolute top-4 right-4 rotate-0 hover:rotate-[360deg] transition-all duration-500'>
						<AiOutlineClose />
					</Link>
				</motion.div>
			</div>
		</>
	)
}

export default ForgotPassword