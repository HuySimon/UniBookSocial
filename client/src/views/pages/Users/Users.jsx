import { PiPencilSimpleLine } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from '../../../api/index';
import Pagination from '../../../components/Dashboard/Pagination';
import AddUserModal from '../../../components/Dashboard/AddUser/AddUserModal';
import Delete from '../../../components/Dashboard/Delete/Delete';
import EditUser from '../../../components/Dashboard/EditUser/EditUser';
import UserCardProfile from '../../../components/Dashboard/UserInformation/UserCardProfile';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../../hooks/useAuthContext';
const Users = () => {
	const [userList, setUserList] = useState([]);
	const [state, dispatch] = useAuthContext()
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [itemsPerPage] = useState(10);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [edit, setEdit] = useState([false, 0, 0, 0]);
	const [selectedUser, setSelectedUser] = useState([false, null]);
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			role: "-1",
			query: ""
		}
	})
	const fetchData = async (data) => {
		try {
			let url = `/api/v1/users?page[number]=${currentPage}&page[size]=10&include=roleData`;
			if (data.role != -1) {
				var roleQuery = `equals(role,'${data.role}')`
				url += `&filter=` + roleQuery
			}
			if (data.query != "") {
				if (data.role === "-1") {
					var newQuery = `contains(email,'${data.query}')`
					url += `&filter=` + newQuery
				} else {
					let temp = url.substring(0, 67)
					var newQuery
					if(/^\d+$/.test(data.query)){
						newQuery = `contains(email,'"${data.query}"')`
					}else {
						newQuery = `contains(email,'${data.query}')`
					}
					url = temp + 'and(' + url.substring(67, url.length) + ',' + newQuery + ')'
				}
			}
			const res = await Axios.get(url)
			if (res.status === 200) {
				setUserList(res.data.data.data)
				const totalItems = res.data.totalItem;
				setTotalPages(Math.ceil(totalItems / itemsPerPage));
			}
			console.log(url);
		} catch (error) {
			console.log(error);
		}
	};
	const getAllUser = async () => {
		try {
			let url = `/api/v1/users?page[number]=${currentPage}&page[size]=10&include=roleData`;
			const res = await Axios.get(url)
			if (res.status === 200) {
				setUserList(res.data.data.data)
				const totalItems = res.data.totalItem;
				setTotalPages(Math.ceil(totalItems / itemsPerPage));
			}
		} catch (error) {
			console.log(error)
		}
	}

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
	useEffect(() => {
		getAllUser()
	}, [state.addUser, isModalOpen])
	// Handle update role user
	const handleUpdateUser = async (userId, updatedUser) => {
		try {
			const res = await Axios.patch(`/api/v1/users/${userId}`, updatedUser);
			if (res.status === 200) {
				toast.success("Edit user successfully")
				setEdit([false, 0, 0, 0])
				getAllUser();
				console.log(res.data.data.data)
			}
		} catch (error) {
			toast.error(error.response.data.message)
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
		fetchData();
	};
	useEffect(() => {
		getAllUser();
	}, [currentPage, itemsPerPage]);


	return (
		<>
			<div className="relative overflow-x-auto m-4">
				<div className="flex justify-between items-center pb-5 bg-white space-x-4">
					<form className='flex gap-3' onSubmit={handleSubmit(fetchData)}>
						<select {...register("role")} className='w-fit border p-2 border-gray-400 rounded-md'>
							<option value="-1">All</option>
							<option value="1">Customer</option>
							<option value="2">Admin</option>
							<option value="3">Post management</option>
						</select>
						<input type="text" {...register("query")} className='p-2 rounded-md w-[30vh] placeholder:text-sm' placeholder='Search by email...' />
						<button type="submit" className='px-3 py-2 bg-primary-main text-white rounded-md'>Search</button>
					</form>
					<button
						className="w-fit py-2 px-3 bg-primary-900 rounded-md text-white inline-flex items-center justify-center hover:bg-primary-700 transition-all"
						onClick={handleOpenModal}>
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
							userList.map((user) => (
								<tr
									key={user.id} className="bg-white border-b hover:bg-gray-50">
									<td className="px-6 py-4">{user.id}</td>
									<td
										onClick={() => setSelectedUser([true, user])}
										scope="row"
										className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
									>
										<img
											className="w-10 h-10 rounded-full cursor-pointer"
											src={`http://127.0.0.1:5000/public/images/users/avatar/${user.avatar}`}
											alt="Jese image"
										/>
										<div className="pl-3">
											<div className="text-base font-semibold">{user.username}</div>
											<div className="font-normal text-gray-500">{user.email}</div>
										</div>
									</td>
									<td className="px-6 py-4">{user.firstName}</td>
									<td className="px-6 py-4">{user.lastName}</td>
									<td className="px-6 py-4">{user.phoneNumber}</td>
									<td className="px-6 py-4">{user.roleData.name}</td>
									<td className="px-6 py-4">
										<div className="flex items-center">
											<div className={`h-2.5 w-2.5 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-yellow-500"} mr-2`}></div>{' '}
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
				{isModalOpen && <AddUserModal onClose={handleCloseModal} />}
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
