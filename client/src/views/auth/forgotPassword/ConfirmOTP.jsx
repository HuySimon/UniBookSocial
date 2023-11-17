import React, { useState } from 'react';
import OtpInput from 'react18-input-otp';
import { motion } from 'framer-motion';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { toast } from 'react-toastify';
const ConfirmOTP = ({ title, handlePrevStep, handleNextStep }) => {
	const [otp, setOtp] = useState('');
	const [state, dispatch] = useAuthContext()
	console.log(state)
	const handleChange = (enteredOtp) => {
		setOtp(enteredOtp);
	};
	function maskEmail(email) {
		// Split the email into username and domain
		const [username, domain] = email.split('@');

		// Mask the username with asterisks
		const maskedUsername = username.charAt(0) + '*'.repeat(username.length - 1);

		// Combine the masked username and domain to form the masked email
		const maskedEmail = `${maskedUsername}@${domain}`;

		return maskedEmail;
	}
	const checkOTP = () => {
		if (otp == state.resetPasswordToken) {
			toast.success("OTP verified!!")
			handleNextStep()
		} else {
			toast.error("Wrong OTP")
		}
	}
	return (
		<motion.form
			initial={{
				x: '50%',
				opacity: 0,
			}}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					duration: 0.5,
					ease: [0.32, 0, 0.67, 0],
				},
			}}
			exit={{
				x: '50%',
				opacity: 0,
				transition: {
					duration: 0.35,
					ease: [0.32, 0, 0.67, 0],
				},
			}}
			className="w-1/2 flex flex-col items-center mx-auto"
		>
			<span className="font-medium text-3xl">{title}</span>
			<p className="text-sm text-gray-500 text-center my-3">
				We have sent the code verfication to {maskEmail(state.email)}
			</p>
			<OtpInput
				value={otp}
				onChange={handleChange}
				numInputs={4}
				isInputNum={true}
				containerStyle={{ gap: '10px', margin: '20px 0' }}
				shouldAutoFocus={true}
				inputStyle={{ width: '50px', height: '50px', color: 'black' }}
			/>
			<input
				type="button"
				onClick={() => { checkOTP() }}
				value="Submit"
				className="w-full py-3 text-center bg-primary-800 text-sm font-medium hover:bg-primary-700 transition-all text-white rounded-md"
			/>
		</motion.form>
	);
};

export default ConfirmOTP;
