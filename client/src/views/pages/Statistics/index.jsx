import { useState } from 'react';
import Chart from 'react-apexcharts';

const Statistics = () => {
    const [selectedFilter, setSelectedFilter] = useState('Week');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showDatepicker, setShowDatepicker] = useState(false);

    // -----
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    // const [chartData, setChartData] = useState(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setIsDropdownOpen(false);
    };

    //---------
    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
        updateChartData(date, selectedEndDate);
    };

    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
        updateChartData(selectedStartDate, date);
    };

    const updateChartData = (startDate, endDate) => {
        // Thực hiện logic để lấy dữ liệu thống kê trong khoảng thời gian startDate đến endDate
        // và cập nhật giá trị cho biểu đồ
        const filteredData = setChartData(filteredData); // Lọc dữ liệu thống kê theo khoảng thời gian
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
                            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
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
                                            selectedFilter === 'Month' ? 'bg-gray-100' : ''
                                        }`}
                                        onClick={() => handleFilterChange('Month')}
                                    >
                                        Month
                                    </a>
                                </li>
                                <li>
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
                            </ul>
                            {/* <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                Delete User
                            </a>
                        </div> */}
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

                <div className="flex items-center">
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
                        />
                    </div>
                </div>
            </div>
            {/* <!-- BarChart --> */}
            <div className="row">
                <div className="col-10 flex justify-center">
                    <Chart options={options} series={series} type="bar" width={900} height={576} />
                </div>
            </div>
            {showDatepicker && (
                <div className="datepicker datepicker-dropdown dropdown absolute top-0 left-0 z-50 pt-2 active block datepicker-orient-bottom datepicker-orient-left">
                    <div className="datepicker-picker inline-block rounded-lg bg-white shadow-lg p-4">
                        <div className="datepicker-header">
                            <div className="datepicker-title bg-white px-2 py-3 text-center font-semibold"></div>
                            <div className="datepicker-controls flex justify-between mb-2">
                                <button
                                    type="button"
                                    className="bg-white rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="text-sm rounded-lg text-gray-900 bg-white font-semibold py-2.5 px-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch"
                                >
                                    November 2023
                                </button>
                                <button
                                    type="button"
                                    className="bg-white rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="datepicker-main p-1">
                            <div className="datepicker-view flex">
                                <div className="days">
                                    <div className="days-of-week grid grid-cols-7 mb-1">
                                        <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Su
                                        </span>
                                        <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Mo
                                        </span>
                                        <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Tu
                                        </span>
                                        <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            We
                                        </span>
                                        <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Th
                                        </span>
                                        <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Fr
                                        </span>
                                        <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Sa
                                        </span>
                                    </div>
                                    <div className="datepicker-grid w-64 grid grid-cols-7">
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day prev text-gray-500"
                                            data-date="1698512400000"
                                        >
                                            29
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day prev text-gray-500"
                                            data-date="1698598800000"
                                        >
                                            30
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day prev text-gray-500"
                                            data-date="1698685200000"
                                        >
                                            31
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1698771600000"
                                        >
                                            1
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1698858000000"
                                        >
                                            2
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1698944400000"
                                        >
                                            3
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699030800000"
                                        >
                                            4
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699117200000"
                                        >
                                            5
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699203600000"
                                        >
                                            6
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day focused"
                                            data-date="1699290000000"
                                        >
                                            7
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699376400000"
                                        >
                                            8
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699462800000"
                                        >
                                            9
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699549200000"
                                        >
                                            10
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699635600000"
                                        >
                                            11
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699722000000"
                                        >
                                            12
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699808400000"
                                        >
                                            13
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699894800000"
                                        >
                                            14
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1699981200000"
                                        >
                                            15
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700067600000"
                                        >
                                            16
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700154000000"
                                        >
                                            17
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700240400000"
                                        >
                                            18
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700326800000"
                                        >
                                            19
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700413200000"
                                        >
                                            20
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700499600000"
                                        >
                                            21
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700586000000"
                                        >
                                            22
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700672400000"
                                        >
                                            23
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700758800000"
                                        >
                                            24
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700845200000"
                                        >
                                            25
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1700931600000"
                                        >
                                            26
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1701018000000"
                                        >
                                            27
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1701104400000"
                                        >
                                            28
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1701190800000"
                                        >
                                            29
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                            data-date="1701277200000"
                                        >
                                            30
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                            data-date="1701363600000"
                                        >
                                            1
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                            data-date="1701450000000"
                                        >
                                            2
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                            data-date="1701536400000"
                                        >
                                            3
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                            data-date="1701622800000"
                                        >
                                            4
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                            data-date="1701709200000"
                                        >
                                            5
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                            data-date="1701795600000"
                                        >
                                            6
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                            data-date="1701882000000"
                                        >
                                            7
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                            data-date="1701968400000"
                                        >
                                            8
                                        </span>
                                        <span
                                            className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                            data-date="1702054800000"
                                        >
                                            9
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* datepicker-dropdown */}
            {/* <div className="datepicker datepicker-dropdown dropdown absolute top-0 left-0 z-50 pt-2 active block datepicker-orient-bottom datepicker-orient-left">
                <div className="datepicker-picker inline-block rounded-lg bg-white shadow-lg p-4">
                    <div className="datepicker-header">
                        <div className="datepicker-title bg-white px-2 py-3 text-center font-semibold"></div>
                        <div className="datepicker-controls flex justify-between mb-2">
                            <button
                                type="button"
                                className="bg-white rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="text-sm rounded-lg text-gray-900 bg-white font-semibold py-2.5 px-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch"
                            >
                                November 2023
                            </button>
                            <button
                                type="button"
                                className="bg-white rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="datepicker-main p-1">
                        <div className="datepicker-view flex">
                            <div className="days">
                                <div className="days-of-week grid grid-cols-7 mb-1">
                                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Su
                                    </span>
                                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Mo
                                    </span>
                                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Tu
                                    </span>
                                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        We
                                    </span>
                                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Th
                                    </span>
                                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Fr
                                    </span>
                                    <span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Sa
                                    </span>
                                </div>
                                <div className="datepicker-grid w-64 grid grid-cols-7">
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day prev text-gray-500"
                                        data-date="1698512400000"
                                    >
                                        29
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day prev text-gray-500"
                                        data-date="1698598800000"
                                    >
                                        30
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day prev text-gray-500"
                                        data-date="1698685200000"
                                    >
                                        31
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1698771600000"
                                    >
                                        1
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1698858000000"
                                    >
                                        2
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1698944400000"
                                    >
                                        3
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699030800000"
                                    >
                                        4
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699117200000"
                                    >
                                        5
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699203600000"
                                    >
                                        6
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day focused"
                                        data-date="1699290000000"
                                    >
                                        7
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699376400000"
                                    >
                                        8
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699462800000"
                                    >
                                        9
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699549200000"
                                    >
                                        10
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699635600000"
                                    >
                                        11
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699722000000"
                                    >
                                        12
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699808400000"
                                    >
                                        13
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699894800000"
                                    >
                                        14
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1699981200000"
                                    >
                                        15
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700067600000"
                                    >
                                        16
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700154000000"
                                    >
                                        17
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700240400000"
                                    >
                                        18
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700326800000"
                                    >
                                        19
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700413200000"
                                    >
                                        20
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700499600000"
                                    >
                                        21
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700586000000"
                                    >
                                        22
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700672400000"
                                    >
                                        23
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700758800000"
                                    >
                                        24
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700845200000"
                                    >
                                        25
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1700931600000"
                                    >
                                        26
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1701018000000"
                                    >
                                        27
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1701104400000"
                                    >
                                        28
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1701190800000"
                                    >
                                        29
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day"
                                        data-date="1701277200000"
                                    >
                                        30
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                        data-date="1701363600000"
                                    >
                                        1
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                        data-date="1701450000000"
                                    >
                                        2
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                        data-date="1701536400000"
                                    >
                                        3
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                        data-date="1701622800000"
                                    >
                                        4
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                        data-date="1701709200000"
                                    >
                                        5
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                        data-date="1701795600000"
                                    >
                                        6
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                        data-date="1701882000000"
                                    >
                                        7
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                        data-date="1701968400000"
                                    >
                                        8
                                    </span>
                                    <span
                                        className="datepicker-cell hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm day next text-gray-500"
                                        data-date="1702054800000"
                                    >
                                        9
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="datepicker-footer">
                        <div className="datepicker-controls flex space-x-2 mt-2">
                            <button
                                type="button"
                                className="button today-btn text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"
                            >
                                Today
                            </button>
                            <button
                                type="button"
                                className="button clear-btn text-gray-900 bg-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Statistics;
