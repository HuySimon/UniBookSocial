// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Axios from '../../../api/index';

function AddUserModal({ onClose }) {
    const modalRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleAddUser = () => {
        if (!name || !email || !phone) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Vui lòng nhập một địa chỉ email hợp lệ.');
            return;
        }

        if (!validatePhone(phone)) {
            setError('Vui lòng nhập một số điện thoại hợp lệ.');
            return;
        }

        // Tiến hành thêm người dùng vào cơ sở dữ liệu hoặc xử lý logic khác
        const addUser = async (userData) => {
            try {
                const url = `/api/v1/users`;
                const response = await Axios.post(url, userData);
                // const data = response.data.data.data;
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        const userData = {
            email: 'trannhatsinh@gmail.com',
            firstName: 'sinh',
            lastName: 'Nguyen Van',
            password: 'Test1234',
            phoneNumber: '0908141453',
            role: '1',
        };

        addUser(userData);

        // Reset các trường và xóa thông báo lỗi
        setName('');
        setEmail('');
        setPhone('');
        setError('');
    };

    const validateEmail = (email) => {
        // Sử dụng biểu thức chính quy để kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        // Sử dụng biểu thức chính quy để kiểm tra định dạng số điện thoại
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    const handleCloseClick = () => {
        onClose();
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            id="addtUserModal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-opacity-50 bg-black"
        >
            <div ref={modalRef} className="relative w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <form action="#" className="relative bg-white rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">Add user</h3>
                        <AiOutlineClose
                            onClick={handleCloseClick}
                            size={22}
                            className="fixed top-4 right-4 text-white cursor-pointer hover:rotate-[360deg] transition-all duration-300 z-20"
                        />
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">
                                    First Name
                                </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Bonnie"
                                    required=""
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Green"
                                    required=""
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="example@company.com"
                                    required=""
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Phone Number
                                </label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="number"
                                    name="phone-number"
                                    id="phone-number"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="e.g. +(12)3456 789"
                                    required=""
                                />
                                <p className="text-sm text-red-600">Please enter title</p>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Department
                                </label>
                                <input
                                    type="text"
                                    name="department"
                                    id="department"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Development"
                                    required=""
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Company
                                </label>
                                <input
                                    type="number"
                                    name="company"
                                    id="company"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="123456"
                                    required=""
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="current-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    name="current-password"
                                    id="current-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="••••••••"
                                    required=""
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    name="new-password"
                                    id="new-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="••••••••"
                                    required=""
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button
                            onClick={handleAddUser}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Save all
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddUserModal;
