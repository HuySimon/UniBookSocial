// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { PiTrashSimpleLight } from 'react-icons/pi';
import Swal from 'sweetalert2';

import Axios from '../../../api/index';

// eslint-disable-next-line react/prop-types
const Delete = ({ userId, apiUrl, onDeleteSuccess, onDeleteError }) => {
    const onDeleteUser = async (userId) => {
        try {
            const res = await Axios.delete(`${apiUrl}/${userId}`);

            if (res.status === 200) {
                const data = res.data;
                if (data.success) {
                    onDeleteSuccess(userId);
                    Swal.fire({
                        title: 'Xóa thành công!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                } else {
                    onDeleteError(data.error);
                    Swal.fire({
                        title: 'Xóa người dùng thất bại',
                        text: data.error,
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            } else {
                throw new Error('Error deleting user');
            }
        } catch (error) {
            onDeleteError(error);
            Swal.fire({
                title: 'Lỗi',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };
    const handleDelete = () => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa người dùng này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy',
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                onDeleteUser(userId);
            }
        });
    };

    return (
        <Link
            onClick={handleDelete}
            to="#"
            type="button"
            data-modal-target="deleteUserModal"
            data-modal-show="deleteUserModal"
            className="font-medium text-2xl text-blue-600"
        >
            <i>
                <PiTrashSimpleLight />
            </i>
        </Link>
    );
};

export default Delete;
