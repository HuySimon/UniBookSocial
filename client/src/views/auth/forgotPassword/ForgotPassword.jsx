import React, { useEffect, useState } from 'react'
import { Logo } from '../../../assets'
import { AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import SendEmail from './SendEmail'
import ConfirmOTP from './ConfirmOTP'
import ChangePassword from './ChangePassword'
import { BsArrowLeft } from 'react-icons/bs'
import { useMultistepForm } from '../../../hooks/useMultiStepForm'
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
			return <SendEmail title={"Forgot Password"} handleNextStep={handleNextStep} />
		} else if (step == 1) {
			return <ConfirmOTP title={"Email Verfication Sent"} handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} />
		} else if (step == 2) {
			return <ChangePassword title={"Change Password"} />
		}
	}
	useEffect(() => {
		document.title = "Forgot Password"
	})
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
					className="w-[35em] h-[38em] bg-white rounded-md shadow-lg relative">
					<div
						className="w-full h-full flex flex-col">
						<div className="w-full h-1/2 flex justify-center items-center">
							<img src={Logo} alt="" className='w-full h-3/4 object-contain' />
						</div>
						<div className="pb-5">
							<AnimatePresence mode='wait'>
								{PageDisplay()}
							</AnimatePresence>
						</div>
					</div>
					<Link
						to={"/login"}
						className='absolute top-4 right-4 rotate-0 hover:rotate-[360deg] transition-all duration-500'>
						<AiOutlineClose />
					</Link>
					{
						step === 1 && (
							<div
								onClick={handlePrevStep}
								className="absolute top-4 left-4 cursor-pointer">
								<BsArrowLeft size={22} />
							</div>
						)
					}
				</motion.div>
			</div>
		</>
	)
}

export default ForgotPassword