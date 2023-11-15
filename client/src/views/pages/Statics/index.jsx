import { useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const Statics = () => {
    const [selectedFilter, setSelectedFilter] = useState('Week');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setIsDropdownOpen(false);
    };

    const getChartData = () => {
        if (selectedFilter === 'Week') {
            return {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                data: [2001, 2003, 2006, 3004, 2004, 2000, 1000],
            };
        } else if (selectedFilter === 'Month') {
            // Lấy dữ liệu và tùy chọn cho biểu đồ khi lọc theo Reward
            return {
                categories: [
                    'January',
                    'Febuaray',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                data: [2001, 2003, 2006, 3004, 2004, 2000, 1000, 1000, 1000, 1000, 1000, 1000],
            };
        } else if (selectedFilter === 'Year') {
            // Lấy dữ liệu và tùy chọn cho biểu đồ khi lọc theo Promote
            return {
                categories: ['2021', '2022', '2023', '2024'],
                data: [2001, 2003, 2006, 3004],
            };
        }

        return {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            data: [2001, 2003, 2006, 3004, 2004, 2000, 1000],
        };
        // return null;
    };

    const chartData = getChartData();

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
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({
        options: {
            chart: {
                id: 'apexchart-example',
            },
            xaxis: {
                categories: chartData.categories,
            },
        },
        series: [
            {
                name: 'number of violating posts',
                data: chartData.data,
            },
        ],
    });

    return (
        <div className="relative overflow-x-auhref shadow-md sm:rounded-lg mg">
            <div className="flex items-center pb-4 pt-4 bg-white space-x-4">
                <div className="ml-2">
                    <buthrefn
                        onClick={toggleDropdown}
                        id="dropdownActionButhrefn"
                        data-dropdown-hrefggle="dropdownAction"
                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
                        type="buthrefn"
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
                    </buthrefn>
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
                                    <Link
                                        to="#"
                                        className={`block px-4 py-2 hover:bg-gray-100 ${
                                            selectedFilter === 'Week' ? 'bg-gray-100' : ''
                                        }`}
                                        onClick={() => handleFilterChange('Week')}
                                    >
                                        Week
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className={`block px-4 py-2 hover:bg-gray-100 ${
                                            selectedFilter === 'Month' ? 'bg-gray-100' : ''
                                        }`}
                                        onClick={() => handleFilterChange('Month')}
                                    >
                                        Month
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className={`block px-4 py-2 hover:bg-gray-100 ${
                                            selectedFilter === 'Year' ? 'bg-gray-100' : ''
                                        }`}
                                        onClick={() => handleFilterChange('Year')}
                                    >
                                        Year
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div
                        id="dropdownAction"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                    >
                        <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButhrefn">
                            <li>
                                {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Month
                                </a> */}
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
                                {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                    Year
                                </a> */}
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
                            {/* <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                    Activate account
                                </a>
                            </li> */}
                        </ul>
                        {/* <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                Delete User
                            </a>
                        </div> */}
                    </div>
                </div>
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

export default Statics;
