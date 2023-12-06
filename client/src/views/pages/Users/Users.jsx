/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { PiPencilSimpleLine } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from '../../../api/index';
import Pagination from '../../../components/Dashboard/Pagination';
import Search from '../../../components/Dashboard/Search';
import Filter from '../../../components/Dashboard/Filter/Filter';
import './Users.scss';
import AddUserModal from '../../../components/Dashboard/AddUser/AddUserModal';
import Delete from '../../../components/Dashboard/Delete/Delete';
import EditUser from '../../../components/Dashboard/EditUser/EditUser';
import UserCardProfile from '../../../components/Dashboard/UserInformation/UserCardProfile';
import { toast } from 'react-toastify';

const Users = () => {
	const [userList, setUserList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [itemsPerPage] = useState(10);
	const [searchTerm, setSearchTerm] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [filterValue, setFilterValue] = useState('All');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [edit, setEdit] = useState([false, 0, 0, 0]);
	const [selectedUser, setSelectedUser] = useState([false, null]);

	const fetchData = async () => {
		try {
			let url = `/api/v1/users?page[number]=${currentPage}&page[size]=10&include=roleData`;
			if (searchTerm && isEmailValid === true) {
				url += `&filter=or(contains(email,'${searchTerm}'))`;
			} else if (searchTerm && isEmailValid === false) {
				url += `&filter=or(contains(username,'${searchTerm}'))`;
			}

			if (filterValue != 'All' && filterValue != '') {
				url += `&filter=or(equals(role,'${filterValue}'))`;
			} else {
				url += ``;
			}
			if (filterValue != '' && searchTerm != '') {
				url += `&filter=and(contains(username,'${searchTerm}'),equals(role,'${filterValue}'))`;
			}
			const response = await Axios.get(url);
			const data = response.data.data.data;
			setUserList(data);

			const totalItems = response.data.totalItem;
			setTotalPages(Math.ceil(totalItems / itemsPerPage));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setUserList(userList);
	}, [userList]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			fetchData();
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);

	const handleSearch = (value) => {
		setSearchTerm(value);
		setFilterValue('All'); // Đặt lại giá trị của filterValue về 'All' để xóa bộ lọc vai trò hiện tại
		setCurrentPage(1);

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isValid = emailRegex.test(value);
		setIsEmailValid(isValid);
	};

	useEffect(() => {
		fetchData();
	}, [currentPage, itemsPerPage]);

	const handlePageChange = (pageNumber) => {
		if (pageNumber < 1) {
			pageNumber = 1;
		} else if (pageNumber > totalPages) {
			pageNumber = totalPages;
		}
		setCurrentPage(pageNumber);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleAddUser = (newUser) => {
		setUserList([...userList, newUser]);
		fetchData();
	};

	const handleFilter = (value) => {
		let filterRole = '';
		if (value === 'User') {
			filterRole = '1';
		} else if (value === 'Admin') {
			filterRole = '2';
		} else if (value === 'Post management') {
			filterRole = '3';
		}

		setFilterValue(filterRole);
		setSearchTerm(''); // Đặt lại giá trị của searchTerm về rỗng để xóa bộ lọc tìm kiếm hiện tại
		setCurrentPage(1);
	};
	useEffect(() => {
		fetchData();
	}, [filterValue]);


	// Handle update role user
	const handleUpdateUser = async (userId, updatedUser) => {
		try {
			const res = await Axios.patch(`/api/v1/users/${userId}`, updatedUser);
			if (res.status === 200) {
				toast.success("Edit user successfully")
				setEdit([false, 0, 0, 0])
				fetchData();
				console.log(res.data.data.data)
			}
		} catch (error) {
			toast.error(error.response.message)
		}
	};
	// Handle Delete User
	const handleDeleteUser = (userId) => {
		const updatedUserList = [...userList];

		const index = updatedUserList.findIndex((user) => user.id === userId);
		if (index !== -1) {
			updatedUserList.splice(index, 1);
		}
		setUserList(updatedUserList);
	};
	console.log([...userList]);

	return (
		<>
			<div className="relative overflow-x-auto m-4">
				<div className="flex items-center pb-5 bg-white space-x-4">
					<Filter onFilter={handleFilter} />
					<label htmlFor="table-search" className="sr-only">
						Search
					</label>
					<Search userList={userList} onSearch={handleSearch} placeholder={"Search by email"} />
					<button
						className="w-28 sm:w-20 py-2 px-1 text-sm bg-primary-900 rounded-md text-white inline-flex items-center justify-center hover:bg-primary-700 transition-all"
						onClick={handleOpenModal}
					>
						Add user
					</button>
				</div>
				<table className="w-full text-sm text-left text-gray-500 border">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							<th scope="col" className="px-6 py-3">
								User ID
							</th>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								FirstName
							</th>
							<th scope="col" className="px-6 py-3">
								LastName
							</th>
							<th scope="col" className="px-6 py-3">
								PhoneNumber
							</th>
							<th scope="col" className="px-6 py-3">
								Role
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody key="1">
						{userList && userList.length > 0 ? (
							userList
								// .filter((user) => user.role === filterValue)
								.map((user) => (
									<tr key={user.id} className="bg-white border-b -800 -700 hover:bg-gray-50">
										<td className="px-6 py-4">{user.id}</td>
										<th
											scope="row"
											className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
										>
											<img
												onClick={() => setSelectedUser([true, user])}
												className="w-10 h-10 rounded-full cursor-pointer"
												src={`http://127.0.0.1:5000/public/images/users/avatar/${user.avatar}`}
												alt="Jese image"
											/>
											<div className="pl-3">
												<div className="text-base font-semibold">{user.username}</div>
												<div className="font-normal text-gray-500">{user.email}</div>
											</div>
										</th>
										<td className="px-6 py-4">{user.firstName}</td>
										<td className="px-6 py-4">{user.lastName}</td>
										<td className="px-6 py-4">{user.phoneNumber}</td>
										<td className="px-6 py-4">{user.role}</td>
										<td className="px-6 py-4">
											<div className="flex items-center">
												<div className={`h-2.5 w-2.5 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-red-500"} mr-2`}></div>{' '}
												{user.status}
											</div>
										</td>
										<td className="px-6 py-4">
											{/* <!-- Modal toggle --> */}
											<div className="flex items-center space-x-2 md:space-x-2">
												<Link
													onClick={() => {
														setEdit([true, user.id, user.role, user.status])
													}}
													to="#"
													type="button"
													data-modal-target="editUserModal"
													data-modal-show="editUserModal"
													className=" font-semibold text-2xl text-blue-600"
												>
													<i>
														<PiPencilSimpleLine />
													</i>
												</Link>
												<Delete
													userId={user.id}
													apiUrl="/api/v1/users" // Truyền URL API cụ thể vào đây
													onDeleteSuccess={handleDeleteUser}
												/>
											</div>
										</td>
									</tr>
								))
						) : (
							<tr key="1" className="bg-white border-b -800 -700 hover:bg-gray-50">
								<td className="px-6 py-4">This user could not be found</td>
							</tr>
						)}
					</tbody>
				</table>
				{/* <!-- Add user modal --> */}
				{isModalOpen && <AddUserModal onClose={handleCloseModal} onAddUser={handleAddUser} />}
				{/* Edit user modal */}
				{
					edit[0] && (
						<EditUser
							data={edit}
							onUpdateUser={handleUpdateUser}
							onClose={setEdit}
						/>
					)
				}

				{/* Card Profile User */}
				{selectedUser[0] && <UserCardProfile onClose={setSelectedUser} user={selectedUser[1]} />}
			</div>
			{/* Pagination */}
			<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
		</>
	);
};

export default Users;
