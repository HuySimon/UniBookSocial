// eslint-disable-next-line react/prop-types, no-unused-vars
function Pagination({ totalPages, currentPage, onPageChange }) {
	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
	const showEllipsis = totalPages > 5;

	const handlePageClick = (pageNumber) => {
		// setCurrentPage(pageNumber);
		onPageChange(pageNumber);
	};

	const handlePrevious = () => {
		if (currentPage > 1) {
			// setCurrentPage(currentPage - 1);
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			// setCurrentPage(currentPage + 1);
			onPageChange(currentPage + 1);
		}
	};
	const renderPageNumber = (pageNumber) => {
		const isCurrentPage = pageNumber === currentPage;
		const baseClass = "text-sm font-medium leading-none cursor-pointer border-t pt-3 mr-4 px-2";
		const activeClass = "text-indigo-700 border-indigo-400";
		const hoverClass = "text-gray-600 hover:text-indigo-700 border-transparent hover:border-indigo-400";
		return (
			<p
				key={pageNumber}
				className={`${baseClass} ${isCurrentPage ? activeClass : hoverClass}`}
				onClick={() => handlePageClick(pageNumber)}>
				{pageNumber}
			</p>
		);
	};
	return (
		<div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
			<div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
				{
					currentPage != 1 ? (
						<div
							className={`flex items-center pt-3 text-gray-600 ${currentPage === 1 ? '' : 'hover:text-indigo-700 cursor-pointer'
								}`}
							onClick={() => handlePrevious()}
						>
							<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1.1665 4H12.8332"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M1.1665 4L4.49984 7.33333"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M1.1665 4.00002L4.49984 0.666687"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<p className="text-sm ml-3 font-medium leading-none ">Previous</p>
						</div>
					) : (
						<div className="w-20"></div>
					)
				}
				<div className="sm:flex hidden">
					{showEllipsis && currentPage > 3 && (
						<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
							...
						</p>
					)}
					{pageNumbers.map((pageNumber) => renderPageNumber(pageNumber))}
					{showEllipsis && currentPage < totalPages - 2 && (
						<p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
							...
						</p>
					)}
				</div>
				{
					currentPage != totalPages ? (
						<div
							className={`flex items-center pt-3 text-gray-600 ${currentPage === totalPages ? '' : 'hover:text-indigo-700 cursor-pointer'
								}`}
							onClick={() => handleNext()}
						>
							<p className="text-sm font-medium leading-none mr-3">Next</p>
							<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1.1665 4H12.8332"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9.5 7.33333L12.8333 4"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9.5 0.666687L12.8333 4.00002"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					) : (
						<div className="w-[56px]"></div>
					)
				}
			</div>
		</div>
	);
}

export default Pagination;
