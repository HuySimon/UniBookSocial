// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { PiTrashSimpleLight } from 'react-icons/pi';
import Swal from 'sweetalert2';

import Axios from '../../../api/index';
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const Delete = ({ userId, onDeleteSuccess }) => {
	const onDeleteUser = async () => {
		try {
			const res = await Axios.delete(`${apiUrl}/${userId}`);
			console.log(userId)
			if (res && +res.status === 204) {
				// onDeleteSuccess(userId);
				toast.success("Delete user successfully!")
				onDeleteSuccess(userId);
			} else {
				toast.error("Delete user failed!")
				// throw new Error('Error deleting user');
			}
		} catch (error) {
			toast.error(error.response.data.message)
		}
	};
	const handleDelete = () => {
		Swal.fire({
			title: `Are you sure you want to delete this user?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Confirm',
			cancelButtonText: 'Cancel',
			allowOutsideClick: false,
		}).then((result) => {
			if (result.isConfirmed) {
				onDeleteUser();
			}
		});
	};

	return (
		<Link
			onClick={handleDelete}
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
