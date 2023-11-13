// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Axios from '../../../api/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddUserValidationSchema } from '../../../validations/AddUserValidation';

// eslint-disable-next-line react/prop-types, no-unused-vars
function AddUserModal({ onClose, onAddUser }) {
    const [formErrors, setFormErrors] = useState({});
    const modalRef = useRef(null);

    // const [formData, setFormData] = useState({
    //     email: '',
    //     firstName: '',
    //     lastName: '',
    //     phoneNumber: '',
    //     role: '',
    //     password: '',
    // });

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            role: '',
            password: '',
        },
        mode: 'onChange',
        resolver: yupResolver(AddUserValidationSchema),
    });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: value,
    //     }));
    // };

    const validateForm = () => {
        let errors = {};
        if (!formData.firstName) {
            errors.firstName = 'First Name is required';
        }
        if (!formData.lastName) {
            errors.lastName = 'Last Name is required';
        }

        const regex = /\S+@\S+\.\S+/;

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!regex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        const phoneRegrex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!formData.phoneNumber) {
            errors.phoneNumber = 'Phone Number is required';
        } else if (!phoneRegrex.test(formData.phoneNumber)) {
            errors.phoneNumber = 'Please enter a valid phone number';
        }
        if (!formData.role) {
            errors.role = 'Role is required';
        }

        const passwordRegex = /^.{6,}$/;
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (!passwordRegex.test(formData.password)) {
            errors.password = 'Please enter a minimum of 6 characters';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSaveClick = async (data) => {
        let fd = new FormData();
        fd.append('email', data.email);
        fd.append('firstName', data.firstName);
        fd.append('lastName', data.lastName);
        fd.append('phoneNumber', data.phoneNumber);
        fd.append('role', data.role);
        fd.append('password', data.password);
        console.log(data);
        try {
            const url = `/api/v1/users`;
            const res = await Axios.post(url, fd);
            const data = res.data.data.data;
            console.log(res.data.data.data);
            onAddUser(data);
            onClose();
            if (res.status === 201) {
                toast.success('Thêm người dùng thành công!');
            }
        } catch (error) {
            console.error(error);
            toast.error('Thêm người dùng thất bại!');
        }
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    console.log(errors);
    return (
        <div
            id="addUserModal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-opacity-50 bg-black h-webkit-fill-available"
        >
            <div ref={modalRef} className="relative w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <form onSubmit={handleSubmit(handleSaveClick)} className="relative bg-white rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">Add user</h3>
                        <AiOutlineClose
                            onClick={() => onClose()}
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
                                    // value={formData.firstName}
                                    {...register('firstName')}
                                    type="text"
                                    id="first-name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Bonnie"
                                    required=""
                                />
                                <p className="text-sm text-red-500">{errors.firstName?.message}</p>
                                {/* {formErrors.firstName && <p className="text-sm text-red-600">{formErrors.firstName}</p>} */}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Last Name
                                </label>
                                <input
                                    // value={formData.lastName}
                                    // onChange={handleChange}
                                    {...register('lastName')}
                                    type="text"
                                    name="lastName"
                                    id="last-name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Green"
                                    required=""
                                />
                                <p className="text-sm text-red-500">{errors.lastName?.message}</p>
                                {/* {formErrors.lastName && <p className="text-sm text-red-500">{formErrors.lastName}</p>} */}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    // value={formData.email}
                                    // onChange={handleChange}
                                    {...register('email')}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="example@company.com"
                                    required=""
                                />
                                <p className="text-sm text-red-500">{errors.email?.message}</p>
                                {/* {formErrors.email && <p className="text-sm text-red-500">{formErrors.email}</p>} */}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Phone Number
                                </label>
                                <input
                                    // value={formData.phoneNumber}
                                    // onChange={handleChange}
                                    {...register('phoneNumber')}
                                    type="number"
                                    name="phoneNumber"
                                    id="phone-number"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="e.g. +(12)3456 789"
                                    required=""
                                />
                                <p className="text-sm text-red-500">{errors.phoneNumber?.message}</p>
                                {/* {formErrors.phoneNumber && (
                                    <p className="text-sm text-red-500">{formErrors.phoneNumber}</p>
                                )} */}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Role
                                </label>
                                <select
                                    id="roles"
                                    name="role"
                                    {...register('role')}
                                    onChange={(e) => setValue('select', e.target.value, { shouldValidate: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-blue-600 focus:border-blue-600 w-full p-2.5"
                                >
                                    <option value>Choose a role</option>
                                    <option value="1">User</option>
                                    <option value="2">Admin</option>
                                    <option value="3">Post management</option>
                                </select>
                                <p className="text-sm text-red-500">{errors.role?.message}</p>
                                {/* {formErrors.role && <p className="text-sm text-red-500">{formErrors.role}</p>} */}
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Password
                                </label>
                                <input
                                    {...register('password')}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="••••••••"
                                    required=""
                                />
                                <p className="text-sm text-red-500">{errors.password?.message}</p>
                                {/* {formErrors.password && <p className="text-sm text-red-500">{formErrors.password}</p>} */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button
                            type="submit"
                            className="text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddUserModal;
