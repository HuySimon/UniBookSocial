import { useState } from 'react';
import Chart from 'react-apexcharts';

const Statics = () => {
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({
        options: {
            chart: {
                id: 'apexchart-example',
            },
            xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            },
        },
        series: [
            {
                name: 'number of violating posts',
                data: [2001, 2003, 2006, 3004, 2004, 2000, 1000],
            },
        ],
    });

    return (
        <div className="relative overflow-x-auhref shadow-md sm:rounded-lg mg">
            <div className="flex items-center pb-4 pt-4 bg-white space-x-4">
                <div className="ml-2">
                    <buthrefn
                        id="dropdownActionButhrefn"
                        data-dropdown-hrefggle="dropdownAction"
                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
                        type="buthrefn"
                    >
                        <span className="sr-only">Action buthrefn</span>
                        All
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
                    <div
                        id="dropdownAction"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                    >
                        <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButhrefn">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Reward
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                    Promote
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
                    </div>
                </div>
            </div>
            {/* <!-- BarChart --> */}
            <div className="row">
                <div className="col-10 flex justify-center">
                    <Chart options={state.options} series={state.series} type="bar" width={900} height={576} />
                </div>
            </div>
        </div>
    );
};

export default Statics;
