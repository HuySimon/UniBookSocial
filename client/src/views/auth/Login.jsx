import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../hooks/useAuthContext';
import Axios from '../../api';
import { loginValidationSchema } from '../../validations/AuthValidation';
import { LoginImg, Logo } from '../../assets';
import { slideUpLogin } from './animation';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import { FcGoogle } from 'react-icons/fc';
import { ImSpinner9 } from 'react-icons/im';
import ForgotPassword from './forgotPassword/ForgotPassword';
const Login = () => {
	document.title = "Login "
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	const [state, dispatch] = useAuthContext();
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			email: "",
			password: ""
		},
		resolver: yupResolver(loginValidationSchema),
	})
	const onSubmit = async (data) => {
		const user = {
			email: data.email,
			password: data.password
		};
		setIsLoading(true);
		try {
			const res = await Axios.post('/api/v1/users/login', user);
			if (res.status === 200) {
				localStorage.setItem("activeButtonProfile", 0)
				localStorage.setItem("activeButton", "Home")
				dispatch({ type: "LOGIN", value: res.data.data.user });
				console.log(state.user)
				toast.success("Login success!");
				navigate('/');
			}
		} catch (err) {
			toast.error("Incorrect password or email");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<>
			<section
				className='w-full h-screen flex justify-center items-center bg-gray-100'>
				<motion.div
					variants={slideUpLogin}
					initial="initial"
					animate="animate"
					exit={"exit"}
					className="w-full md:flex bg-white shadow-lg rounded-2xl h-[630px] md:mx-16 xl:m-0 max-w-lg md:max-w-7xl overflow-hidden">
					<div className={`w-full md:w-1/2 xl:w-[40%] py-16 px-8 md:px-16 md:py-12 text-primary-main transition-all duration-1000 relative`}>
						<Link to={"/"}>
							<img src={Logo} alt="" className='w-16 h-16 mx-auto' />
						</Link>
						<p className='text-center font-bold text-4xl'>Login</p>
						<form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
							<div className="flex flex-col mb-6 relative">
								<label htmlFor="email" className='font-semibold mb-1'>Email</label>
								<input type="text" id="email" {...register("email")}
									className='border border-primary-900 rounded-md text-primary-main placeholder:text-primary-700 placeholder:text-sm px-4 py-2 w-full focus:ring-1 focus:shadow-md focus:outline-none ring-primary-900' placeholder='Enter your email' />
								<p className='absolute -bottom-6 text-red-600 text-sm'>{errors.email?.message}</p>
							</div>
							<div className="flex flex-col mb-6 relative">
								<label htmlFor="password" className='font-semibold mb-1'>Password</label>
								<input type={`${!showPassword ? "password" : "text"}`} id="password" {...register("password")}
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
								<p className='absolute -bottom-6 text-red-600 text-sm'>{errors.password?.message}</p>
							</div>
							<div className="flex justify-end items-center my-3">
								<Link
									to={"/forgotpassword"}
									className='underline-offset-2 underline'
								>Forgot Password?</Link>
							</div>
							<button
								type='submit'
								className='w-full flex justify-center h-[50px] items-center py-3 px-14 font-semibold rounded-lg bg-primary-main text-white'>
								{
									isLoading ? <ImSpinner9 className='animate-spin duration-500' /> : "Login"
								}
							</button>
							<div className="flex my-4">
								<span className='font-semibold text-black'>Not register yet?</span>
								<Link
									to={"/signup"}
									className='ml-1 font-semibold text-primary-main hover:underline underline-offset-2'>Create an account</Link>
							</div>
						</form>
					</div>
					<div className="hidden md:block md:w-1/2 xl:w-[60%] p-3 z-10">
						<img src={LoginImg} alt="" className='rounded-2xl w-full h-full object-cover' />
					</div>
				</motion.div>
			</section>
		</>
	)
}

export default Login
