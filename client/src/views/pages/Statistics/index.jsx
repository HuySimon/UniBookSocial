import { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import { toast } from 'react-toastify';
import Axios from '../../../api/index';
import { useForm } from 'react-hook-form';
import { useDownloadExcel } from 'react-export-table-to-excel'
import { IoPrintOutline } from "react-icons/io5";
const Statistics = () => {
	const [selectedFilter, setSelectedFilter] = useState('Violation');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [chartData, setChartData] = useState({ categories: [], data: [] });
	const [dataTable, setDataTable] = useState([])
	const modalRef = useRef(null);
	const { register, handleSubmit, formState: { errors }, setFocus } = useForm({
		defaultValues: {
			dayStart: new Date().toISOString().substring(0, 10),
			dayEnd: new Date().toISOString().substring(0, 10)
		}
	})
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

	const updateChartData = async (data) => {
		if (new Date(data.dayStart) > new Date(data.dayEnd)) {
			toast.error("Please choose day End is greater than day Start")
			return setFocus("dayStart")
		}
		if (new Date(data.dayEnd) > new Date()) {
			toast.error("Please choose day End before or equal the current day")
			return setFocus("dayEnd")
		}
		if (new Date(data.dayEnd) - new Date(data.dayStart) > 30 * 60 * 60 * 24 * 1000) {
			toast.error("The limit between 2 dates is less or equal than 30 days")
			return setFocus("dayStart")
		}
		try {
			const response = await Axios.get(`/api/v1/posts/statistics/${selectedFilter}/dayStart/${data.dayStart}/dayEnd/${data.dayEnd}`,);
			if (response.status === 200) {
				console.log(response)
				const statisticsData = response.data.posts;
				if (statisticsData.length === 0) {
					toast.success("No data found between the selected date")
				}
				const categories = statisticsData.map((item) => item.date_col_formed);
				const data = statisticsData.map((item) => item.count);
				setDataTable(response.data.violatedUsers)
				setChartData({ categories, data });
			}
		} catch (error) {
			console.error('Error fetching statistics data:', error);
		}
	};
	const options = {
		chart: {
			id: 'apexchart-example',
		},
		xaxis: {
			categories: chartData.categories,
		},
		title: {
			text: `Number of ${selectedFilter === "Violation" ? "violated" : "checking"} posts`,
			offsetX: 0,
			offsetY: 0,
			align: 'center',
			margin: 10,
			style: {
				fontSize: '30px',
				fontWeight: '500'
			},
		}
	};

	const series = [
		{
			name: 'Number of violating posts',
			data: chartData.data,
		},
	];
	const tableRef = useRef(null)
	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "Violation Posts",
		sheet: "Example 1"
	})
	return (
		<div className="relative w-full h-full">
			<div className="flex items-center pb-4 pt-[15px] bg-white space-x-4">
				<div className="ml-5" ref={modalRef}>
					<button
						onClick={toggleDropdown}
						id="dropdownActionButhrefn"
						data-dropdown-hrefggle="dropdownAction"
						className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-[10px]"
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
										className={`block px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'Violation' ? 'bg-gray-100' : ''
											}`}
										onClick={() => handleFilterChange('Violation')}
									>
										Violation
									</a>
								</li>
								<li>
									<a
										href="#"
										className={`block px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'Check Post' ? 'bg-gray-100' : ''
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
				<form
					className='flex gap-2'
					onSubmit={handleSubmit(updateChartData)}>
					<input type="date" {...register("dayStart")} defaultValue={new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10)} className='rounded-md w-fit' />
					<input type="date" {...register("dayEnd")} defaultValue={new Date().toISOString().substring(0, 10)} className='rounded-md w-fit' />
					<button type="submit" className='px-5 py-2 bg-primary-main text-white rounded-md hover:bg-primary-700 transition-all'>Filter</button>
				</form>
			</div>
			{/* <!-- BarChart --> */}
			<div className="w-full h-1/2 mt-10">
				<div className="h-full w-full flex justify-center">
					<Chart options={options} series={series} type="bar" width={1000} height={"100%"} />
				</div>
			</div>
			{
				dataTable.length > 0 && (
					<div className="w-full flex flex-col mt-3">
						<button
							onClick={onDownload}
							className='self-end flex items-center gap-1 mb-2 group transition-all px-3 py-1 mr-1 hover:bg-[#C5E898] rounded-md'>
							<IoPrintOutline size={30} className='' />
							<span className='w-0 hidden transition-all group-hover:block group-hover:w-auto '>Export to excel</span>
						</button>

						<table ref={tableRef} className='w-full text-sm text-left text-gray-500 border rounded-md'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
								<tr>
									<th scope="col" className="px-6 py-3">ID</th>
									<th scope="col" className="px-6 py-3">Name</th>
									<th scope="col" className="px-6 py-3">Quantity</th>
									<th scope="col" className="px-6 py-3">Total</th>
								</tr>
							</thead>
							{
								dataTable.map((item, index) => (
									<tbody key={1}>
										{
											[...Array(5)].fill(null).map((_, index) => (
												<tr key={index} className='bg-white border-b hover:bg-gray-50'>
													<td className="px-6 py-4">{item.userPostData.id}</td>
													<td className="px-6 py-4">{item.userPostData.username}</td>
													<td className="px-6 py-4">{item.count}</td>
													<td className="px-6 py-4">{item.countAll}</td>
												</tr>
											))
										}
									</tbody>
								))
							}
						</table>
					</div>
				)
			}
		</div>
	);
};

export default Statistics;
