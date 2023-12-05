import { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import { DatePicker } from 'antd';
import { toast } from 'react-toastify';
import { isAfter, differenceInDays, parse } from 'date-fns';

import Axios from '../../../api/index';

const Statistics = () => {
    const [selectedFilter, setSelectedFilter] = useState('Violation');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // -----
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [chartData, setChartData] = useState({ categories: [], data: [] });
    const modalRef = useRef(null);

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

        // Current date
        const currentDate = new Date();
        const current = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

        const dateFormat = 'dd-MM-yyyy';
        const startDate = parse(formattedDate, dateFormat, new Date());
        const toDay = parse(current, dateFormat, new Date());

        const dayDiff = differenceInDays(toDay, startDate);

        if (dayDiff === 0) {
            setSelectedStartDate(formattedDate);
        } else {
            toast.error('The start date must be the current date');
        }
    };

    const handleEndDateChange = (value) => {
        const date = new Date(value.$d);
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);

        const formattedDate = `${day}-${month}-${year}`;

        const dateFormat = 'dd-MM-yyyy';
        const startDate = parse(selectedStartDate, dateFormat, new Date());
        const endDate = parse(formattedDate, dateFormat, new Date());

        const dayDiff = differenceInDays(endDate, startDate);

        if (dayDiff > 0 || dayDiff < -30) {
            toast.error('Please end date is 30 days less than start date or equal to start date');
        } else {
            setSelectedEndDate(formattedDate);
        }
    };

    const updateChartData = async (startDate, endDate) => {
        try {
            const response = await Axios.get(
                `/api/v1/posts/statistics/${selectedFilter}/dayStart/${startDate}/dayEnd/${endDate}`,
            );
			if(response.status === 200) {
				console.log(response)
			}
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
                <div className="ml-5" ref={modalRef}>
                    <button
                        onClick={toggleDropdown}
                        id="dropdownActionButhrefn"
                        data-dropdown-hrefggle="dropdownAction"
                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2"
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
                            </ul>
                        </div>
                    )}
                </div>
                <DatePicker placeholder="Select date start" className='py-[6px]' onChange={handleStartDateChange} />
                <DatePicker placeholder="Select date end" className='py-[6px]' onChange={handleEndDateChange} />
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
