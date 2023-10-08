import React, { useState } from 'react'
import { Portrait, SignupImg } from '../../../assets'
import { IoCallOutline } from 'react-icons/io5'
import { HiOutlineServer } from 'react-icons/hi'
import { BsCheck2Circle } from 'react-icons/bs'
import { MdOutlineRateReview } from 'react-icons/md'
import { About, HistoryConfirm, HistoryPost, Review } from './ProfileItem'
const Index = () => {

	const [activeButton, setActiveButton] = useState(0)
	const [activeSection, setActiveSection] = useState(0)
	const menu = [
		{
			icon: IoCallOutline,
			title: "About",
			layout: <About />
		},
		{
			icon: HiOutlineServer,
			title: "History Post",
			layout: <HistoryPost />
		},
		{	
			icon: BsCheck2Circle,
			title: "History Confirm",
			layout: <HistoryConfirm />
		},
		{
			icon: MdOutlineRateReview,
			title: "Reivew",
			layout: <Review />
		}
	]

	const renderActiveLayout = () => {
		const activeItem = menu[activeSection];
		return activeItem ? activeItem.layout : null;
	};

	return (
		<div className='w-full flex flex-col px-[25px] lg:px-[150px] xl:px-[250px] mx-auto'>
			<div className="w-full flex flex-col h-[400px] relative z-[8]">
				<div className="coverImage w-full h-full absolute inset-0 ">
					<img src={SignupImg} alt="" className='w-full h-full object-cover object-top' />
				</div>
				<div className="w-full flex justify-end items-center relative top-80">
					<div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
						<img src={Portrait} alt="" className='w-full h-full object-cover object-top' />
					</div>
				</div>
			</div>
			<div className="flex flex-col text-center mt-16 pb-3">
				<p className='font-medium text-3xl'>John Doe</p>
				<p className='text-sm text-[#929292] px-16'>Freelance Desginer and Front-end Developer</p>
			</div>
			<div className="pt-4 w-full z-[9]">
				<div className="h-full flex lg:flex-row flex-col">
					<div className="w-full lg:w-1/4 flex lg:h-full h-fit flex-row lg:flex-col justify-between lg:justify-start items-center gap-5 lg:border-r border-gray-400 lg:pr-6 lg:mb-0 mb-6">
						{
							menu.map((item, index) => (
								<div
									key={index}
									onClick={() => {
										setActiveButton(index)
										setActiveSection(index)
									}}
									className={`w-full lg:flex items-center text-[#929292] relative cursor-pointer mb-1 p-3 rounded-md transition-all duration-300 lg:text-left text-center ${activeButton === index ? 'bg-primary-main text-white shadow-md !shadow-primary-700 ' : ''}`}>
									<item.icon size={26} className='lg:block hidden' />
									<span className='inline-block lg:ml-3 text-base lg:font-medium'>{item.title}</span>
								</div>
							))
						}
					</div>
					<div className="w-full lg:w-3/4 lg:pl-6">
						{renderActiveLayout()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index
