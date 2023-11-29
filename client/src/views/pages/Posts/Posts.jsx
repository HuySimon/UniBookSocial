import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { PiTrashSimpleLight } from 'react-icons/pi';
import { toast } from 'react-toastify';
import Pagination from '../../../components/Dashboard/Pagination';
import './Posts.scss';
import Axios from '../../../api/index';
import Search from '../../../components/Dashboard/Search';
import ModalMessage from '../../../components/Dashboard/ModalMessage';
function Posts() {
	const [postList, setPostList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [itemsPerPage] = useState(2);
	const [searchTerm, setSearchTerm] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [checkboxStates, setCheckboxStates] = useState([]);
	const [selectedModalId, setSelectedModalId] = useState(null);
	const [activeIcon, setActiveIcon] = useState(null);

	const fetchData = async () => {
		try {
			let url = `/api/v1/posts?include=userPostData,reportData&page[number]=${currentPage}&page[size]=2`;

			// &filter=equals(status,CheckPost)
			// -------------
			// if (searchTerm && isEmailValid === true) {
			//     url += `&filter=or(contains(email,'${searchTerm}'))`;
			// } else if (searchTerm && isEmailValid === false) {
			//     url += `&filter=or(contains(username,'${searchTerm}'))`;
			// }
			if (searchTerm && isEmailValid === true) {
				url += `&filter=or(contains(title,'${searchTerm}'))`;
			} else if (searchTerm && isEmailValid === false) {
				url += `&filter=or(contains(title,'${searchTerm}'))`;
			}

			//  url += `&filter=or(contains(title,'${searchTerm}'))`;
			// if (filterValue != 'All' && filterValue != '') {
			//     url += `&filter=or(equals(role,'${filterValue}'))`;
			// } else {
			//     url += ``;
			// }

			// console.log(filterValue != '' && searchTerm != '');

			// if (filterValue != '' && searchTerm != '') {
			//     url += `&filter=and(contains(username,'${searchTerm}'),equals(role,'${filterValue}'))`;
			// }
			// url += `&filter=or(contains(username,'${searchValue}'),equals(role,'${filterValue}'))`;
			// const url = `/api/v1/users?page[number]=1&page[size]=10&filter=or(contains(email,'nguoi'),contains(username,'nguoi'))`;
			// const url = `/api/v1/users`;
			// &filter=or(equals(role,'1'))
			// const url = `/api/v1/users?page[number]=${currentPage}&page[size]=10$filter=or(contains(email,'${searchTerm}'),contains(username,'${searchTerm}'))`;
			// const url = `/api/v1/users?page[number]=${currentPage}&page[size]=${itemsPerPage}&filter=or(contains(email,'${searchValue}'),contains(username,'${searchValue}'))`;
			// const url = `/api/v1/users?page[number]=${currentPage}&page[size]=${itemsPerPage}&filter=or(contains(username,'${searchValue}'),equals(role,'${filterValue}'))`
			const response = await Axios.get(url);
			const data = response.data.data.data;
			const initialCheckboxStates = data.map((post) => ({
				id: post.id,
				checked: false,
			}));
			setCheckboxStates(initialCheckboxStates);
			setPostList(data);

			const totalItems = response.data.totalItem;
			setTotalPages(Math.ceil(totalItems / itemsPerPage));
		} catch (error) {
			console.log(error);
		}
	};
	const calculateTimeAgo = (createdAt) => {
		const now = new Date();
		const created = new Date(createdAt);
		const timeDifference = now - created;
		const seconds = Math.floor(timeDifference / 1000);

		if (seconds < 60) {
			return `${seconds} seconds ago`;
		} else if (seconds < 3600) {
			const minutes = Math.floor(seconds / 60);
			return `${minutes} minutes ago`;
		} else if (seconds < 86400) {
			const hours = Math.floor(seconds / 3600);
			return `${hours} hours ago`;
		} else {
			const days = Math.floor(seconds / 86400);
			return `${days} days ago`;
		}
	};
	useEffect(() => {
		fetchData();
	}, [currentPage, itemsPerPage]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			fetchData();
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);

	const handleSearch = (value) => {
		setSearchTerm(value);
		setCurrentPage(1);

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isValid = emailRegex.test(value);
		setIsEmailValid(isValid);
	};
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleCheckboxChange = async (postId, updatedStatus) => {
		try {
			const checked = checkboxStates.find((checkbox) => checkbox.id === postId)?.checked || false;
			setCheckboxStates((prevState) =>
				prevState.map((checkbox) => (checkbox.id === postId ? { ...checkbox, checked: !checked } : checkbox)),
			);
			const res = await Axios.patch(`/api/v1/users/${postId}`, updatedStatus);
			if (res.status === 200) {
				toast.success('Xác nhận bài đăng không vi phạm thành công!');
			}
			fetchData();
		} catch (error) {
			toast.error('Failed!');
		}
	};

	const handleModalClose = (postId) => {
		setActiveIcon(null);
		if (postId === selectedModalId) {
			setSelectedModalId(null);
		}
	};

	const handleDeleteActive = (postId) => {
		setSelectedModalId(postId);
		setActiveIcon(postId);
	};

	return (
		<div className="relative overflow-x-auto sm:rounded-lg">
			<div className="flex items-center pb-4 pt-4 bg-white ">
				<div className="ml-5">
					<button
						id="dropdownActionButton"
						data-dropdown-toggle="dropdownAction"
						className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 "
						type="button"
					>
						<span className="sr-only">Action button</span>
						Today
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
					<div
						id="dropdownAction"
						className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
					>
						<ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButton">
							<li>
								<Link to="#" className="block px-4 py-2 hover:bg-gray-100">
									Reward
								</Link>
							</li>
							<li>
								<Link to="#" className="block px-4 py-2 hover:bg-gray-100 ">
									Promote
								</Link>
							</li>
							<li>
								<Link to="#" className="block px-4 py-2 hover:bg-gray-100 ">
									Activate account
								</Link>
							</li>
						</ul>
						<div className="py-1">
							<Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
								Delete User
							</Link>
						</div>
					</div>
				</div>
				<label htmlFor="table-search" className="sr-only">
					Search
				</label>
				<Search onSearch={handleSearch} placeholder={"Search by title ..."} />
			</div>

			<div className="flex justify-between items-center pt-2 px-5 gap-5 bg-white">
				{postList && postList.length > 0 ? (
					postList.map((post) => (
						// eslint-disable-next-line react/jsx-key
						<div
							key={post.id}
							className="w-full h-fit p-6 border border-gray-400 shadow-md rounded-lg"
						>
							<div className="w-full flex flex-col">
								<div className="w-full flex justify-between items-center">
									<div className="flex gap-3">
										<div className="w-14 h-14 rounded-full overflow-hidden">
											<img src={`http://127.0.0.1:5000/public/images/users/avatar/${post.userPostData.avatar}`} alt="" className="w-full h-full object-cover" />
										</div>
										<div className="flex flex-col justify-start">
											<span className="name font-medium">{post.userPostData.username}</span>
											<p className="text-[10px] leading-4 text-gray-600">{calculateTimeAgo(post.createdAt)}</p>
										</div>
									</div>
								</div>
								<div className="w-full h-[30vh] xl:h-[35vh] overflow-hidden rounded-lg border border-gray-500 mt-4">
									<Link>
										<img src={`http://127.0.0.1:5000/public/images/posts/${post.mainImage}`} alt="" className="w-full h-full object-contain" />
									</Link>
								</div>
								<table className="flex border border-gray-500 rounded-lg my-4">
									<thead className="flex flex-col border-r w-1/2 xl:w-1/5 border-gray-500">
										<th className="border-b p-2 border-gray-500 font-medium text-sm">Name</th>
										<th className="border-b p-2 border-gray-500 font-medium text-sm">Price</th>
										<th className="border-b p-2 border-gray-500 font-medium text-sm">Major</th>
										<th className="border-b p-2 border-gray-500 font-medium text-sm">Type</th>
										<th className="border-b p-2 border-gray-500 font-medium text-sm">Description</th>
										<th className="border-b p-2 border-gray-500 font-medium text-sm">Email</th>
										<th className="p-2 font-medium text-sm">Content Reports</th>
									</thead>
									<tbody className="flex flex-col w-1/2 xl:w-4/5">
										<td className="p-2 text-sm">{post.title}</td>
										<td className="p-2 border-t border-gray-500 text-sm">{post.price}</td>
										<td className="p-2 border-t border-gray-500 text-sm">General Subject</td>
										<td className="p-2 border-t border-gray-500 text-sm">Old</td>
										<td className="p-2 border-t border-gray-500 text-sm">{post.description}</td>
										<td className="p-2 border-t border-gray-500 text-sm">{post.userPostData.email}</td>
										<td className="p-2 border-t border-gray-500 text-sm">Hình ảnh nhạy cảm</td>
									</tbody>
								</table>
								<div className="flex justify-end">
									<label className="checkbox">
										<input
											checked={
												checkboxStates.find((checkbox) => checkbox.id === post.id)?.checked ||
												false
											}
											onChange={() => handleCheckboxChange(post.id)}
											type="checkbox"
											id={post.id}
										/>
										<div className="checkbox__indicator"></div>
									</label>
									<Link
										onClick={() => handleDeleteActive(post.id)}
										to="#"
										type="button"
										data-modal-target="deleteUserModal"
										data-modal-show="deleteUserModal"
										// className="font-medium text-2xl color"
										className={`font-medium text-2xl color${activeIcon === post.id ? ' active' : ''
											}`}
									>
										<i>
											<PiTrashSimpleLight />
										</i>
									</Link>
								</div>
							</div>
						</div>
					))
				) : (
					<div id="NotFound" className="bg-white hover:bg-gray-50">
						<p className="px-6 py-4">This post could not be found</p>
					</div>
				)}
			</div>
			{/* Pagination */}
			{
				totalPages != 0 && (
					<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
				)
			}
			{/* Modal Popup Message */}
			{selectedModalId && (
				<ModalMessage postId={selectedModalId} onClose={() => handleModalClose(selectedModalId)} />
			)}
		</div>
	);
}

export default Posts;
