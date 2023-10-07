import React, { useState } from 'react'
import { motion } from 'framer-motion'
const Index = () => {
	const [isChecked, setIsChecked] = useState(false)

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked)
	}
	return (
		<motion.div
			initial={{
				opacity: 0,
				left: "290px"
			}}
			animate={{
				opacity: 1,
				left: "270px"
			}}
			className='absolute top-1/2 bg-white w-[300px] h-fit rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
			<div className="p-5 flex flex-col">
				<div className="w-full flex justify-between items-center relative">
					<span htmlFor="">Switch Appearance</span>
					<div class="inline-flex items-center">
						<div class="relative inline-block h-4 w-8 cursor-pointer rounded-full">
							<input
								id="switch-component"
								type="checkbox"
								class="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-gray-100 transition-colors duration-300 checked:bg-primary-900 peer-checked:border-primary-900 peer-checked:before:bg-primary-900"
							/>
							<label
								for="switch-component"
								class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-l-primary-900 peer-checked:before:bg-primary-900"
							>
								<div
									class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
									data-ripple-dark="true"
								></div>
							</label>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Index