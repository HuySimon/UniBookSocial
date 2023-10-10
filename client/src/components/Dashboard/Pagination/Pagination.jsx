// // eslint-disable-next-line react/prop-types
// function Pagination({ totalItems, currentPage, itemsPerPage, onPageChange }) {
//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     const handlePageClick = (pageNumber) => {
//         // setCurrentPage(pageNumber);
//         onPageChange(pageNumber);
//     };

//     const handlePrevious = () => {
//         if (currentPage > 1) {
//             // setCurrentPage(currentPage - 1);
//             onPageChange(currentPage - 1);
//         }
//     };

//     const handleNext = () => {
//         if (currentPage < totalPages) {
//             // setCurrentPage(currentPage + 1);
//             onPageChange(currentPage + 1);
//         }
//     };

//     const renderPagination = () => {
//         const paginationItems = [];

//         for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
//             paginationItems.push(
//                 <p
//                     key={pageNumber}
//                     className={`text-sm font-medium leading-none cursor-pointer border-t pt-3 mr-4 px-2 ${
//                         pageNumber === currentPage
//                             ? 'text-indigo-700 border-indigo-400'
//                             : 'text-gray-600 hover:text-indigo-700 border-transparent hover:border-indigo-400'
//                     }`}
//                     onClick={() => handlePageClick(pageNumber)}
//                 >
//                     {pageNumber}
//                 </p>,
//             );
//         }

//         return paginationItems;
//     };

//     return (
//         <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
// {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

//             <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
//                 <div
//                     className={`flex items-center pt-3 text-gray-600 ${
//                         currentPage === 1 ? '' : 'hover:text-indigo-700 cursor-pointer'
//                     }`}
//                     onClick={() => handlePrevious()}
//                 >
//                     <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M1.1665 4H12.8332"
//                             stroke="currentColor"
//                             strokeWidth="1.25"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             d="M1.1665 4L4.49984 7.33333"
//                             stroke="currentColor"
//                             strokeWidth="1.25"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             d="M1.1665 4.00002L4.49984 0.666687"
//                             stroke="currentColor"
//                             strokeWidth="1.25"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </svg>
//                     <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
//                 </div>
//                 <div className="sm:flex hidden">
//                     {renderPagination()}
//                     {/* <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
//                 <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
//                 <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
//                 <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
//                 <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
//                 <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
//                 <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
//                 <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p> */}
//                 </div>
//                 <div
//                     className={`flex items-center pt-3 text-gray-600 ${
//                         currentPage === totalPages ? '' : 'hover:text-indigo-700 cursor-pointer'
//                     }`}
//                     onClick={() => handleNext()}
//                 >
//                     <p className="text-sm font-medium leading-none mr-3">Next</p>
//                     <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M1.1665 4H12.8332"
//                             stroke="currentColor"
//                             strokeWidth="1.25"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             d="M9.5 7.33333L12.8333 4"
//                             stroke="currentColor"
//                             strokeWidth="1.25"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             d="M9.5 0.666687L12.8333 4.00002"
//                             stroke="currentColor"
//                             strokeWidth="1.25"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </svg>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pagination;

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

    // const renderPagination = () => {

    // }

    // const renderPagination = () => {
    //     const paginationItems = [];

    //     for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    //         paginationItems.push(
    //             <p
    //                 key={pageNumber}
    //                 className={`text-sm font-medium leading-none cursor-pointer border-t pt-3 mr-4 px-2 ${
    //                     pageNumber === currentPage
    //                         ? 'text-indigo-700 border-indigo-400'
    //                         : 'text-gray-600 hover:text-indigo-700 border-transparent hover:border-indigo-400'
    //                 }`}
    //                 onClick={() => handlePageClick(pageNumber)}
    //             >
    //                 {pageNumber}
    //             </p>,
    //         );
    //     }

    //     return paginationItems;
    // };

    return (
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
            <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                <div
                    className={`flex items-center pt-3 text-gray-600 ${
                        currentPage === 1 ? '' : 'hover:text-indigo-700 cursor-pointer'
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
                <div className="sm:flex hidden">
                    {/* {renderPagination()} */}
                    {showEllipsis && currentPage > 3 && (
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                            ...
                        </p>
                    )}
                    {/* {pageNumbers.map((pageNumber) => (
                        <p
                            key={pageNumber}
                            className={`text-sm font-medium leading-none cursor-pointer border-t pt-3 mr-4 px-2 ${
                                pageNumber === currentPage
                                    ? 'text-indigo-700 border-indigo-400'
                                    : 'text-gray-600 hover:text-indigo-700 border-transparent hover:border-indigo-400'
                            }`}
                            onClick={() => handlePageClick(pageNumber)}
                        >
                            {pageNumber}
                        </p>
                    ))} */}
                    {pageNumbers.map((pageNumber) => {
                        if (
                            showEllipsis &&
                            (pageNumber === 1 ||
                                pageNumber === totalPages ||
                                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1))
                        ) {
                            return (
                                <p
                                    key={pageNumber}
                                    className={`text-sm font-medium leading-none cursor-pointer border-t pt-3 mr-4 px-2 ${
                                        pageNumber === currentPage
                                            ? 'text-indigo-700 border-indigo-400'
                                            : 'text-gray-600 hover:text-indigo-700 border-transparent hover:border-indigo-400'
                                    }`}
                                    onClick={() => handlePageClick(pageNumber)}
                                >
                                    {pageNumber}
                                </p>
                            );
                        } else if (showEllipsis && pageNumber === currentPage + 2) {
                            return (
                                <p
                                    key={pageNumber}
                                    className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2"
                                >
                                    ...
                                </p>
                            );
                        } else {
                            return null;
                        }
                    })}
                    {showEllipsis && currentPage < totalPages - 2 && (
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                            ...
                        </p>
                    )}
                    {/* <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p> */}
                </div>
                <div
                    className={`flex items-center pt-3 text-gray-600 ${
                        currentPage === totalPages ? '' : 'hover:text-indigo-700 cursor-pointer'
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
            </div>
        </div>
    );
}

export default Pagination;
