import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { PiWarningCircleLight } from "react-icons/pi";
import { toast } from 'react-toastify';
import Pagination from '../../../components/Dashboard/Pagination';
import './Posts.scss';
import Axios from '../../../api/index';
import Search from '../../../components/Dashboard/Search';
import ModalMessage from '../../../components/Dashboard/ModalMessage';
import GenericModal from '../../../components/Modal/GenericModal';
import { useForm } from 'react-hook-form';
function Posts() {
	const [postList, setPostList] = useState([]);
	const [idConfirm, setIDConfirm] = useState(0)
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [itemsPerPage] = useState(2);
	const [searchTerm, setSearchTerm] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isVisibleModal, setIsVisibleModal] = useState(false)
	const [selectedModalId, setSelectedModalId] = useState([false, 0]);
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			query: ""
		}
	})
	const fetchData = async () => {
		try {
			let url = `/api/v1/posts?include=userPostData,reportData&page[number]=${currentPage}&page[size]=2&filter=(equals(status,'CheckPost'))&sort=-updatedAt`
			const response = await Axios.get(url);
			const data = response.data.data.data;
			setPostList(data);
			console.log(data)

			const totalItems = response.data.totalItem;
			setTotalPages(Math.ceil(totalItems / itemsPerPage));
		} catch (error) {
			console.log(error);
		}
	};
	const getReportData = async () => {
		try {
			const res = await Axios.get(`/api/v1/reports`)
		} catch (error) {
			console.log(error)
		}
	}
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

	const handleConfirmViolation = async (postId, status, message) => {
		try {
			const data = {
				status: status
			}
			const res = await Axios.patch(`/api/v1/posts/${postId}/status`, data);
			if (res.status === 200) {
				toast.success(message);
			}
			fetchData();
		} catch (error) {
			console.log(error)
			toast.error(error.response.message);
		}
	};
	const handleModalClose = (postId) => {
		if (postId === selectedModalId) {
			setSelectedModalId(null);
		}
	};
	const onSubmit = async (data) => {
		let url = `/api/v1/posts?include=userPostData,reportData&page[number]=${currentPage}&page[size]=2&sort=-updatedAt&filter=(equals(status,'CheckPost'))`
		try {
			if (data.query != "") {
				var newQuery = `or(contains(title,'${data.query}'),equals(id,'${data.query}'))`
				if (/\d/.test(data.query)) {
					var newQuery = `or(contains(title,'"${data.query}"'),equals(id,'${data.query}'))`
				} else {
					var newQuery = `or(contains(title,'${data.query}'),equals(id,'${data.query}'))`
				}
				url = url.substring(0, 97) + 'and' + url.substring(97, url.length) + ',' + newQuery + ')'
			}
			const res = await Axios.get(url)
			if (res.status === 200) {
				setPostList(res.data.data.data)
			}
		} catch (error) {
			// console.log(url)
			console.log(error)
		}
	}
	return (
		<div className="relative overflow-x-auto sm:rounded-lg">
			<div className="flex items-center py-4 pl-3 bg-white ">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex gap-2'>
					<div className="relative ml-2">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 "
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="search"
							id="table-search-users"
							className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  none-outline"
							placeholder={"Search by title ..."}
							{...register("query")}
						/>
					</div>
					<button
						id="dropdownActionButton"
						data-dropdown-toggle="dropdownAction"
						className="inline-flex items-center text-white bg-primary-main border border-primary-main focus:outline-none hover:bg-primary-700 transition-all focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-2 "
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
			<div className="grid grid-cols-1 xl:grid-cols-2 pt-2 px-5 gap-5 bg-white">
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
										<div className="flex flex-col justify-stretch">
											<span className="name text-base font-medium">{post.userPostData.username}</span>
											<p className="text-sm leading-4 text-gray-600">{calculateTimeAgo(post.createdAt)}</p>
											<p className="text-[12px] leading-4 text-gray-600">#{post.id}</p>
										</div>
									</div>
								</div>
								<div className="w-full h-[30vh] xl:h-[35vh] overflow-hidden rounded-lg border border-gray-500 mt-4">
									<img src={`http://127.0.0.1:5000/public/images/posts/${post.mainImage}`} alt="" className="w-full h-full object-contain" />
								</div>
								<table className="flex border border-gray-500 rounded-lg my-4">
									<thead className="flex flex-col border-r w-1/2 xl:w-1/5 border-gray-500">
										<th className="border-b p-2 border-gray-500 font-medium text-sm">Title</th>
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
										<td className="p-2 border-t border-gray-500 text-sm">{post.reportData.content}</td>
									</tbody>
								</table>
								<div className="flex justify-end gap-2 items-center">
									<p
										onClick={() => {
											setIsVisibleModal(true)
											setIDConfirm(post.id)
										}}
										className='bg-green-500 w-[125px] flex items-center gap-2 text-center text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-all cursor-pointer'>
										<IoMdCheckmark size={20} />
										Normal
									</p>
									<p
										onClick={() => {
											setSelectedModalId([true, post.id])
										}}
										className='bg-red-500 w-[125px] flex items-center gap-2 text-center text-white px-4 py-2 rounded-lg hover:bg-red-400 transition-all cursor-pointer'>
										<PiWarningCircleLight size={20} />
										Violation
									</p>
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
			{selectedModalId[0] && (
				<ModalMessage postID={selectedModalId[1]} onClose={setSelectedModalId} fetchData={fetchData}/>
			)}
			{
				isVisibleModal && (
					<GenericModal alterType="CheckPost" actionType={["Unconfirmed", "Verify post has not been violated successfully!"]}
						setIsVisibleModal={setIsVisibleModal} confirmAction={handleConfirmViolation} postID={idConfirm} />
				)
			}
		</div>
	);
}

export default Posts;
