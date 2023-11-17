import { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import { DatePicker } from 'antd';
import { isAfter, differenceInDays } from 'date-fns';

import Axios from '../../../api/index';

const Statistics = () => {
    const [selectedFilter, setSelectedFilter] = useState('Unconfirm');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // -----
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [chartData, setChartData] = useState({ categories: [], data: [] });
    const modalRef = useRef(null);

    console.log(selectedStartDate, selectedEndDate);

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

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setIsDropdownOpen(false);
    };

    const handleStartDateChange = (value) => {
        const date = new Date(value.$d);
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Tháng được đánh số từ 0 đến 11
        const day = ('0' + date.getDate()).slice(-2);

        const formattedDate = `${day}-${month}-${year}`;

        setSelectedStartDate(formattedDate);
    };

    // const handleEndDateChange = (value) => {
    //     const date = new Date(value.$d);
    //     const year = date.getFullYear();
    //     const month = ('0' + (date.getMonth() + 1)).slice(-2); // Tháng được đánh số từ 0 đến 11
    //     const day = ('0' + date.getDate()).slice(-2);

    //     const formattedDate = `${day}-${month}-${year}`;

    //     setSelectedEndDate(formattedDate);
    // };
    const handleEndDateChange = (value) => {
        const date = new Date(value.$d);
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);

        const formattedDate = `${day}-${month}-${year}`;

        const startDate = new Date(selectedStartDate);
        const endDate = new Date(formattedDate);
        console.log(startDate);

        // Kiểm tra nếu endDate nhỏ hơn startDate hoặc khoảng cách giữa chúng lớn hơn 30 ngày
        // if (isAfter(startDate, endDate) && differenceInDays(startDate, endDate) >= 30) {
        //     // Đặt lại startDate và endDate thành null
        //     setSelectedStartDate(null);
        //     setSelectedEndDate(null);
        // } else {
        //     setSelectedEndDate(formattedDate);
        // }
    };

    const updateChartData = async (startDate, endDate) => {
        try {
            const response = await Axios.get(
                `/api/v1/posts/statistics/${selectedFilter}/dayStart/${startDate}/dayEnd/${endDate}`,
            );
            const statisticsData = response.data.posts;
            const categories = statisticsData.map((item) => item.date_col_formed);
            const data = statisticsData.map((item) => item.count);
            setChartData({ categories, data });
        } catch (error) {
            console.error('Error fetching statistics data:', error);
        }
    };

    useEffect(() => {
        if (selectedStartDate && selectedEndDate) {
            updateChartData(selectedStartDate, selectedEndDate);
        }
    }, [selectedStartDate, selectedEndDate]);

    useEffect(() => {
        updateChartData(selectedStartDate, selectedEndDate);
    }, [selectedFilter]);

    const options = {
        chart: {
            id: 'apexchart-example',
        },
        xaxis: {
            categories: chartData.categories,
        },
    };

    const series = [
        {
            name: 'number of violating posts',
            data: chartData.data,
        },
    ];

    return (
        <div className="relative overflow-x-auhref shadow-md sm:rounded-lg mg">
            <div className="flex items-center pb-4 pt-4 bg-white space-x-4">
                <div className="ml-2" ref={modalRef}>
                    <button
                        onClick={toggleDropdown}
                        id="dropdownActionButhrefn"
                        data-dropdown-hrefggle="dropdownAction"
                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
                        type="button"
                    >
                        <span className="sr-only">Action buthrefn</span>
                        {selectedFilter}
                        <svg
                            className="w-2.5 h-2.5 ml-2.5"
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
                            className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                        >
                            <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButhrefn">
                                <li>
                                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Month
                                </a> */}
                                    <a
                                        href="#"
                                        className={`block px-4 py-2 hover:bg-gray-100 ${
                                            selectedFilter === 'Violation' ? 'bg-gray-100' : ''
                                        }`}
                                        onClick={() => handleFilterChange('Violation')}
                                    >
                                        Violation
                                    </a>
                                </li>
                                <li>
                                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                    Year
                                </a> */}
                                    <a
                                        href="#"
                                        className={`block px-4 py-2 hover:bg-gray-100 ${
                                            selectedFilter === 'Check Post' ? 'bg-gray-100' : ''
                                        }`}
                                        onClick={() => handleFilterChange('Check Post')}
                                    >
                                        Check Post
                                    </a>
                                </li>
                                {/* <li>
                                    <a
                                        href="#"
                                        className={`block px-4 py-2 hover:bg-gray-100 ${
                                            selectedFilter === 'Year' ? 'bg-gray-100' : ''
                                        }`}
                                        onClick={() => handleFilterChange('Year')}
                                    >
                                        Year
                                    </a>
                                </li> */}
                            </ul>
                            {/* <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                Delete User
                            </a>
                        </div> */}
                        </div>
                    )}
                    {/* <div
                        id="dropdownAction"
                        className="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                    >
                        <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButhrefn">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Month
                                </a>
                                <a
                                    href="#"
                                    className={`block px-4 py-2 hover:bg-gray-100 ${
                                        selectedFilter === 'Week' ? 'bg-gray-100' : ''
                                    }`}
                                    onClick={() => handleFilterChange('Week')}
                                >
                                    Week
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                    Year
                                </a>
                                <a
                                    href="#"
                                    className={`block px-4 py-2 hover:bg-gray-100 ${
                                        selectedFilter === 'Year' ? 'bg-gray-100' : ''
                                    }`}
                                    onClick={() => handleFilterChange('Year')}
                                >
                                    Year
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                    Activate account
                                </a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                Delete User
                            </a>
                        </div>
                    </div> */}
                </div>
                <DatePicker placeholder="Select date start" onChange={handleStartDateChange} />
                <DatePicker placeholder="Select date end" onChange={handleEndDateChange} />
                {/* <div className="flex items-center">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input
                            name="start"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                            placeholder="Select date start"
                            onFocus={() => setShowDatepicker(true)}
                            onBlur={() => setShowDatepicker(null)}
                        />
                    </div>
                    <span className="mx-4 text-gray-500">to</span>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input
                            name="end"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                            placeholder="Select date end"
                            onFocus={() => setShowDatepicker(true)}
                            onBlur={() => setShowDatepicker(null)}
                        />
                    </div>
                </div> */}
            </div>
            {/* <!-- BarChart --> */}
            <div className="row">
                <div className="col-10 flex justify-center">
                    <Chart options={options} series={series} type="bar" width={900} height={576} />
                </div>
            </div>
        </div>
    );
};

export default Statistics;
