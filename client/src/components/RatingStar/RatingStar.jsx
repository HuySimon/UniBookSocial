import React, { useState } from 'react';

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
		<div className="flex items-center">
			{Array.from({ length: totalStars }, (_, index) => (
				<div key={index} className="text-3xl cursor-pointer">
					<span
						onClick={() => handleStarClick(index + 1)}
						className={`${index < rating ? 'text-yellow-400' : 'text-gray-400'
							}`}
					>
						★
					</span>
				</div>
			))}
			<span className="ml-1 text-gray-500 text-base inline-block pt-1">
				{ratingToText[initialRating]}
			</span>
		</div>
	);
};

export default StarRating;
