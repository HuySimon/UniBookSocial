import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from '../../../../api/index';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import ChangePasswordProfile from './AboutComponents/ChangePasswordProfile';
import { changeInformationSchema } from '../../../../validations/ProfileValidation';
import { useAuthContext } from '../../../../hooks/useAuthContext';

function isObjectEmpty(obj) {
	return Object.keys(obj).length === 0;
}

const About = () => {
	const [currentUser, setCurrentUser] = useState({});
	const userID = useParams();
	const navigate = useNavigate();

	const [state, dispatch] = useAuthContext();
	const [edit, setEdit] = useState(false);

	const handleEdit = () => {
		setEdit(!edit);
	};

	const {
		register,
		handleSubmit,
		trigger,
		reset,
		formState: { errors, dirtyFields, isValid },
		getValues
	} = useForm({
		defaultValues: {
			firstName: currentUser.firstName,
			lastName: currentUser.lastName,
			email: currentUser.email,
			phoneNumber: currentUser.phoneNumber,
			linkFacebook: currentUser.linkFacebook,
			linkInstagram: currentUser.linkInstagram,
			linkZalo: currentUser.linkZalo
		},
		resolver: yupResolver(changeInformationSchema),
	});

	useEffect(() => {
		Axios.get(`/api/v1/users/${userID.id}`)
			.then(res => setCurrentUser(res.data.data.data))
			.catch(err => {
				toast.error(err.response.message);
				navigate('/');
			});
	}, [userID.id]);

	const handleEditInformation = async (data) => {
		const fieldsToTrack = [
			'firstName',
			'lastName',
			'email',
			'phoneNumber',
			'linkFacebook',
			'linkInstagram',
			'linkZalo',
		];

		const curUser = {};

		fieldsToTrack.forEach((fieldName) => {
			if (dirtyFields[fieldName]) {
				curUser[fieldName] = getValues(fieldName);
				trigger(fieldName);
			}
		});

		if (isObjectEmpty(curUser)) {
			toast.error("You haven't changed anything");
		} else {
			try {
				const response = await Axios.patch('/api/v1/users/updateMe', curUser);
				if (response.status === 200) {
					toast.success("Edit information success!");
				}
			} catch (err) {
				console.log(err);
				toast.error(err.response.data.message);
			}
		}
	};

	return (
		<div className='w-full h-screen'>
			<form
				onSubmit={handleSubmit(handleEditInformation)}
				className='w-full flex flex-col gap-5 mb-2'
			>
				{["firstName", "lastName", "phoneNumber", "email", "linkFacebook", "linkZalo", "linkInstagram"].map((field) => (
					<div key={field} className={`flex justify-between items-center relative mb-2`}>
						<label htmlFor={field} className='w-1/4 font-medium'>{field}</label>
						<input
							type="text"
							disabled={!edit}
							defaultValue={currentUser[field]}
							{...register(field)}
							className='w-3/4 rounded-md px-3 py-2 text-black'
						/>
						<p className='text-[12px] text-red-600 absolute top-[46px] left-1/4'>{errors[field]?.message}</p>
					</div>
				))}
				{Object.entries(state.user).length > 0 && state.user.user.id === currentUser.id && (
					<div className="flex gap-5">
						<button
							type='button'
							onClick={handleEdit}
							className={`w-28 bg-primary-main px-8 py-2 text-white hover:bg-primary-800 cursor-pointer transition-all rounded-md`}
						>
							{edit ? 'Cancel' : 'Edit'}
						</button>
						<button
							type="submit"
							disabled={!edit}
							className={`w-28 px-8 py-2 cursor-pointer transition-all rounded-md ${edit ? 'bg-primary-main text-white hover:bg-primary-800 cursor-pointer' : 'bg-gray-200 text-white cursor-not-allowed'}`}
						>
							Submit
						</button>
					</div>
				)}
			</form>
			{Object.entries(state.user).length > 0 && state.user.user.id === currentUser.id && (
				<ChangePasswordProfile />
			)}
		</div>
	);
};

export default About;
