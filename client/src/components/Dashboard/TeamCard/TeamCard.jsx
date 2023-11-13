import React from 'react';
import { FaFacebook, FaGithubAlt, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TeamCard = ({ data, index }) => {
	const randomColor = ["bg-[#39A7FF]", "#872341", "#99B080", "#9A4444", "#EBE76C", "#435334"];

	const getContrastText = (color) => {
		// Function to determine whether text should be light or dark based on the background color
		const hexColor = color.slice(1); // Remove the '#' character
		const r = parseInt(hexColor.substr(0, 2), 16);
		const g = parseInt(hexColor.substr(2, 2), 16);
		const b = parseInt(hexColor.substr(4, 2), 16);
		const brightness = (r * 299 + g * 587 + b * 114) / 1000;
		return brightness > 128 ? 'text-black' : 'text-white';
	};

	const textColorClass = getContrastText(randomColor[index]);

	return (
		<div className={`w-[280px] h-fit border border-gray-200 rounded-md ${index == 0 ? "shadow-[5px_5px_0px_0px_rgba(108,95,91)]" : index == 1 ? "shadow-[5px_5px_0px_0px_rgba(66,125,157)]" : index == 2
			? "shadow-[5px_5px_0px_0px_rgba(135,35,65)]" : index == 3 ? "shadow-[5px_5px_0px_0px_rgba(153,176,128)]" : index == 4
				? "shadow-[5px_5px_0px_0px_rgba(154,68,68)]" : index == 5 ? "shadow-[5px_5px_0px_0px_rgba(204,200,170)]" : "shadow-[5px_5px_0px_0px_rgba(67,83,52)]"} overflow-hidden`}>
			<div className="p-5 flex flex-col gap-2 mb-6">
				<div className="w-36 h-36 mx-auto">
					<img src={data.image} alt="" className='w-full h-full object-cover object-center rounded-full' />
				</div>
				<p className='text-center font-medium text-lg '>{data.name}</p>
				<p className='text-center font-medium text-gray-500 text-sm'>{data.email}</p>
			</div>
			<div className={`w-full h-fit flex justify-between items-center bg-gray-400 
					${index == 0 ? "hover:bg-[#6C5F5B]" : index == 1 ? "hover:bg-[#427D9D]" : index == 2
					? "hover:bg-[#872341]" : index == 3 ? "hover:bg-[#99B080]" : index == 4
						? "hover:bg-[#9A4444]" : index == 5 ? "hover:bg-[#CCC8AA]" : "hover:bg-[#435334]"} transition-all px-5 py-4 rounded-b-md ${textColorClass}`}>
				<Link to={data.facebook}>
					<FaFacebook size={28} className='text-white' />
				</Link>
				<Link to={data.github}>
					<FaGithubAlt size={32} className='text-white' />
				</Link>
				<Link to={data.linkedin}>
					<FaLinkedinIn size={28} className='text-white' />
				</Link>
				<Link to={data.instagram}>
					<FaInstagram size={28} className='text-white' />
				</Link>
			</div>
		</div>
	);
};

export default TeamCard;
