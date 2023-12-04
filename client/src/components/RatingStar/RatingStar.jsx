import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const StarRating = ({ totalStars, initialRating, onRatingChange }) => {
	const [rating, setRating] = useState(initialRating || 0);

	const ratingToText = {
		1: 'Poor',
		2: 'Fair',
		3: 'Good',
		4: 'Very Good',
		5: 'Excellent',
	};

	const handleStarClick = (newRating) => {
		setRating(newRating);
		if (onRatingChange) {
			onRatingChange(newRating);
		}
	};

	return (
		<div className="flex gap-1 items-center">
			{Array.from({ length: totalStars }, (_, index) => (
				<div key={index} className={`w-8 h-8 flex justify-center items-center text-2xl border rounded-md ${index < rating ? 'border-yellow-400' : ''} text-center cursor-pointer`}>
					<AiFillStar
						onClick={() => handleStarClick(index + 1)}
						className={`w-full h-full p-[6px] ${index < rating ? 'text-yellow-400' : 'text-gray-400'
							}`}
						size={20} />
				</div>
			))}
			<span className="ml-1 text-gray-500 text-sm inline-block pt-1">
				{ratingToText[initialRating]}
			</span>
		</div>
	);
};

export default StarRating;
