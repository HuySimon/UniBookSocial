// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import { Logo, Phat, SGU1, SGU3 } from '../../../assets';
import './HomeAdmin.css';
import TeamCard from '../../../components/Dashboard/TeamCard/TeamCard';
import { HiOutlineUserGroup } from 'react-icons/hi2'
function HomeAdmin() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
	};

	const handleNextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
	};

	useEffect(() => {
		const interval = setInterval(handleNextSlide, 10000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const data = [
		{
			name: "Nguyễn Tiến Phát",
			email: "tienphat.ng693@gmail.com",
			facebook: "https://www.facebook.com/jack.willam2003",
			image: Phat,
			github: "",
			linkedln: "",
			instagram: ""
		},
		{
			name: "Bùi Hồng Bảo",
			email: "hongbao2003@gmail.com",
			image: Phat,
			facebook: "",
			github: "",
			linkedln: "",
			instagram: ""
		},
		{
			name: "Đặng Lê Anh Huy",
			email: "anhhuy2452003@gmail.com",
			image: Phat,
			facebook: "",
			github: "",
			linkedln: "",
			instagram: ""
		}, {
			name: "Trần Đăng Nam",
			email: "langueofdie@gmail.com",
			image: Phat,
			facebook: "",
			github: "",
			linkedln: "",
			instagram: ""
		}, {
			name: "Phan Huỳnh Minh Tiến",
			email: "tienphan09098@gmail.com",
			image: Phat,
			facebook: "",
			github: "",
			linkedln: "",
			instagram: ""
		},
		{
			name: "Tăng Quốc Tuấn",
			email: "tangquoctuan2003@gmail.com",
			image: Phat,
			facebook: "",
			github: "",
			linkedln: "",
			instagram: ""
		}
	]
	return (
		<div className="h-fit w-full m-auto">
			<div id="default-carousel" className="relative mx-5 my-4 " data-carousel="static">
				{/* <!-- Carousel wrapper --> */}
				<div className="overflow-hidden relative h-80 rounded-lg sm:h-64 xl:h-96">
					{/* <!-- Item 1 --> */}
					<div
						id="carousel-item-1"
						className={`h-full  duration-700 ease-in-out ${currentIndex === 0 ? 'block' : 'hidden'}`}
						data-carousel-item
					>
						<span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl">
							First Slide
						</span>
						<img
							src={SGU1}
							className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>
					{/* <!-- Item 2 --> */}
					<div
						id="carousel-item-2"
						className={`h-full  duration-700 ease-in-out ${currentIndex === 1 ? 'block' : 'hidden'}`}
						data-carousel-item
					>
						<img
							src={SGU3}
							className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>
					{/* <!-- Item 3 --> */}
					<div
						id="carousel-item-3"
						className={`h-full duration-700 ease-in-out ${currentIndex === 2 ? 'block' : 'hidden'}`}
						data-carousel-item
					>
						<img
							src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
							className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
							alt="..."
						/>
					</div>
				</div>
				{/* <!-- Slider indicators --> */}
				<div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
					<button
						type="button"
						className={`w-3 h-3 rounded-full ${currentIndex === 0 ? 'bg-white' : 'bg-white/50'}`}
						aria-current={currentIndex === 0 ? 'true' : 'false'}
						aria-label="Slide 1"
						data-carousel-slide-to="0"
						onClick={() => setCurrentIndex(0)}
					></button>
					<button
						type="button"
						className={`w-3 h-3 rounded-full ${currentIndex === 1 ? 'bg-white' : 'bg-white/50'}`}
						aria-current={currentIndex === 1 ? 'true' : 'false'}
						aria-label="Slide 2"
						data-carousel-slide-to="1"
						onClick={() => setCurrentIndex(1)}
					></button>
					<button
						type="button"
						className={`w-3 h-3 rounded-full ${currentIndex === 2 ? 'bg-white' : 'bg-white/50'}`}
						aria-current={currentIndex === 2 ? 'true' : 'false'}
						aria-label="Slide 3"
						data-carousel-slide-to="2"
						onClick={() => setCurrentIndex(2)}
					></button>
				</div>
			</div>
			<div className="m-5 flex items-center">
				<HiOutlineUserGroup size={59} className='bg-primary-500 p-2 text-white rounded-md shadow-lg shadow-primary-400' />
				<div className="py-1 px-3 rounded-r-md">
					<p className='font-medium text-[18px]'>Team Members</p>
					<i className='text-gray-500'>Unibooksocial</i>
				</div>
			</div>
			<div className="mx-5 mb-5 flex justify-between items-center flex-wrap gap-5">
				{
					data.map((item, index) => (
						<TeamCard data={data[index]} />
					))
				}
			</div>
			{/* <blockquote className="text-6xl italic font-semibold text-primary-main text-center flex flex-col justify-center h-64">
                <p>Welcome to SGU Smurf village</p>
            </blockquote> */}
		</div>
	);
}

export default HomeAdmin;
