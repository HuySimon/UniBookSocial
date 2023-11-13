// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Filter({ onFilter }) {
    const [selectedOption, setSelectedOption] = useState('All');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const modalRef = useRef(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        onFilter(option);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="" ref={modalRef}>
            <button
                id="dropdownActionButton"
                onClick={toggleDropdown}
                data-dropdown-toggle="dropdownAction"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 "
                type="button"
            >
                <span className="sr-only">Action button</span>
                {/* All */}
                {selectedOption}
                <svg
                    className={`w-2.5 h-2.5 ml-2.5 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            {isDropdownOpen && (
                <div
                    id="dropdownAction"
                    className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                    <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownActionButton">
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => handleOptionClick('All')}
                            >
                                All
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => handleOptionClick('User')}
                            >
                                User
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => handleOptionClick('Admin')}
                            >
                                Admin
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => handleOptionClick('Post management')}
                            >
                                Post management
                            </a>
                        </li>
                    </ul>
                    {/* <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick("Delete User")}>
              Delete User
            </a>
          </div> */}
                </div>
            )}
        </div>
    );
}

export default Filter;
