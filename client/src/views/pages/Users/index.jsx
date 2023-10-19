/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { PiPencilSimpleLine, PiTrashSimpleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from '../../../api/index';

import Pagination from '../../../components/Dashboard/Pagination';
import Search from '../../../components/Dashboard/Search';
import Filter from '../../../components/Dashboard/Filter/Filter';
import { AvatarUser } from '../../../assets';
import './Users.scss';
import AddUserModal from '../../../components/Dashboard/AddUser/AddUserModal';

const Users = () => {
    const [userList, setUserList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    // const [searchEmail, setSearchEmail] = useState('');
    const [filteredUserList, setFilteredUserList] = useState('');
    const [filterValue, setFilterValue] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchData = async () => {
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // const isValid = emailRegex.test(searchTerm);
        // setIsEmailValid(isValid);

        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = emailRegex.test(searchTerm);
            setIsEmailValid(isValid);
            // console.log(isValid);
            // console.log(searchTerm);

            let url = `/api/v1/users?page[number]=${currentPage}&page[size]=10`;

            if (searchTerm && isEmailValid === true) {
                url += `&filter=or(contains(email,'${searchTerm}'))`;
            } else if (searchTerm && isEmailValid === false) {
                url += `&filter=or(contains(username,'${searchTerm}'))`;
            }

            if (filterValue != 'All' && filterValue != '') {
                url += `&filter=or(equals(role,'${filterValue}}'))`;
            } else {
                url += ``;
            }
            // const url = `/api/v1/users?page[number]=1&page[size]=10&filter=or(contains(email,'nguoi'),contains(username,'nguoi'))`;
            // const url = `/api/v1/users`;
            // &filter=or(equals(role,'1'))
            // const url = `/api/v1/users?page[number]=${currentPage}&page[size]=10$filter=or(contains(email,'${searchTerm}'),contains(username,'${searchTerm}'))`;
            // const url = `/api/v1/users?page[number]=${currentPage}&page[size]=${itemsPerPage}&filter=or(contains(email,'${searchValue}'),contains(username,'${searchValue}'))`;
            const response = await Axios.get(url);
            const data = response.data.data.data;
            console.log(response);
            setUserList(data);
            // setFilteredUserList(userList);
            // setItemsPerPage(data.length);

            const totalItems = response.data.totalItem;
            setTotalPages(Math.ceil(totalItems / itemsPerPage));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // When the value of userList changes, update the value of filteredUserList
        setUserList(userList);
        // setFilteredUserList(userList);
    }, [userList]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchData();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const handleSearch = (value) => {
        // setFilteredUserList(filteredUsers);
        setSearchTerm(value);
        setCurrentPage(1);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(value);
        setIsEmailValid(isValid);
    };

    // // Hàm xử lý tìm kiếm
    // const handleSearch = (searchTerm) => {
    //     // Tìm kiếm trong danh sách người dùng
    //     const results = userList.filter((user) => user.toLowerCase().includes(searchTerm.toLowerCase()));
    //     setSearchValue(results);
    // };

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
        // setFilterValue(value);
        // console.log(filterValue === 'All');
        let filterRole = '';

        if (value === 'User') {
            filterRole = '1';
        } else if (value === 'Admin') {
            filterRole = '2';
        } else if (value === 'Post management') {
            filterRole = '3';
        }

        setFilterValue(filterRole);
        // fetchData();
        setCurrentPage(1);

        // if (filterRole === '' || filterRole === 'All') {
        //     setUserList([]); // Gán lại giá trị ban đầu của danh sách người dùng
        //     fetchData();
        // } else {
        //     fetchData(); // Fetch dữ liệu theo bộ lọc được chọn
        // }
    };
    useEffect(() => {
        fetchData();
    }, [filterValue]);
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mg">
                <div className="flex items-center pb-4 pt-4 bg-white space-x-4">
                    <Filter onFilter={handleFilter} />
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <Search userList={userList} onSearch={handleSearch} />
                    <button
                        className="w-28 sm:w-20 py-2 px-1 bg-primary-900 rounded-md text-white border border-primary-900 inline-flex items-center justify-center "
                        onClick={handleOpenModal}
                    >
                        Add user
                    </button>
                </div>
                <table className="w-full text-sm text-left text-gray-500 -400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 -700 -400">
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
                    <tbody>
                        {userList && userList.length > 0 ? (
                            userList
                                // .filter((user) => user.role === filterValue)
                                .map((user) => (
                                    <tr key={user.id} className="bg-white border-b -800 -700 hover:bg-gray-50">
                                        <td className="px-6 py-4">{user.id}</td>
                                        <th
                                            scope="row"
                                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                                        >
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src={user.avatar}
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
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{' '}
                                                {user.status}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* <!-- Modal toggle --> */}
                                            <div className="flex items-center space-x-2 md:space-x-2">
                                                <Link
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
                                                <Link
                                                    to="#"
                                                    type="button"
                                                    data-modal-target="editUserModal"
                                                    data-modal-show="editUserModal"
                                                    className="font-medium text-2xl text-blue-600"
                                                >
                                                    <i>
                                                        <PiTrashSimpleLight />
                                                    </i>
                                                </Link>
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
            </div>
            {/* Pagination */}
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                // itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Users;
