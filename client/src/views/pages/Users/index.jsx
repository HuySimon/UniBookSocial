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
    const [filteredUserList, setFilteredUserList] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    // const [searchValue, setSearchValue] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((result) => setUserList(result))
    //         .catch((error) => console.log(error));

    //     // Assign initial value to filteredUserList
    //     setFilteredUserList(userList);
    // }, []);

    const fetchData = async () => {
        try {
            // const url = `/api/v1/users?page[number]=1&page[size]=10&filter=or(contains(email,'nguoi'),contains(username,'nguoi'))`;
            // const url = `/api/v1/users`;
            const url = `/api/v1/users?page[number]=${currentPage}&page[size]=10`;
            // const url = `/api/v1/users?page[number]=${currentPage}&page[size]=${itemsPerPage}&filter=or(contains(email,'${searchValue}'),contains(username,'${searchValue}'))`;
            const response = await Axios.get(url);
            const data = response.data.data.data;
            // console.log(response.data.totalItem);
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
        setFilteredUserList(userList);
    }, [userList]);

    const handleSearch = (filteredUsers) => {
        setFilteredUserList(filteredUsers);
        setCurrentPage(1);
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

    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mg">
                <div className="flex items-center pb-4 pt-4 bg-white space-x-4">
                    <Filter />
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
                        {userList && userList.length > 0
                            ? userList.map((user) => (
                                  <tr key={user.id} className="bg-white border-b -800 -700 hover:bg-gray-50">
                                      <td className="px-6 py-4">{user.id}</td>
                                      <th
                                          scope="row"
                                          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                                      >
                                          <img className="w-10 h-10 rounded-full" src={user.avatar} alt="Jese image" />
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
                            : `<p>This user could not be found</p>`}
                        {/* <tr className="bg-white border-b -800 -700 hover:bg-gray-50">
                        <td className="px-6 py-4">
                            1
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                            <img className="w-10 h-10 rounded-full" src={AvatarUser} alt="Jese image" />
                            <div className="pl-3">
                                <div className="text-base font-semibold">Neil Sims</div>
                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            Neil
                        </td>
                        <td className="px-6 py-4">
                            Sims
                        </td>
                        <td className="px-6 py-4">
                            Admin
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <!-- Modal toggle --> 
                            <div className='flex items-center space-x-2 md:space-x-2'>
                                <Link to="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className=" font-semibold text-2xl text-blue-600">
                                    <i >
                                        <PiPencilSimpleLine />
                                    </i>
                                </Link>
                                <Link to="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-2xl text-blue-600">
                                <i>
                                    <PiTrashSimpleLight />
                                </i>
                                </Link>
                            </div>
                        </td>
                    </tr> */}
                    </tbody>
                </table>
                {/* <!-- Add user modal --> */}
                {isModalOpen && <AddUserModal onClose={handleCloseModal} />}
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
