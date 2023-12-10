// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';

import Axios from '../../../api/index';

// eslint-disable-next-line react/prop-types
function ModalMessage({ postID, onClose,fetchData }) {
	const modalRef = useRef(null);
	console.log(postID)
	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			onClose([false, 0]);
		}
	};
	const handleSentClick = async (postId, status) => {
		const content = document.getElementById('message').value;
		if (content == "") {
			return toast.error("Please write content")
		}
		const data = {
			status: status,
			content: content
		}
		try {
			const res = await Axios.patch(`/api/v1/posts/${postId}/status`, data);
			if (res.status === 200) {
				toast.success('Send notification to user successfully!');
				onClose([false, 0]);
				fetchData()
				console.log(res)
			}
			// fetchData();
		} catch (error) {
			toast.error('Failed!');
			console.log(error)
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div
			id={postID}
			tabIndex="-1"
			aria-hidden="true"
			className="fixed top-0 left-0 right-0 z-50 items-center justify-center flex w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-opacity-50 bg-black h-webkit-fill-available"
		>
			<div id={postID} ref={modalRef} className="relative w-full max-w-2xl max-h-full">
				{/* <!-- Modal content --> */}
				<form id={postID} action="#" className="relative bg-white rounded-lg shadow">
					{/* <!-- Modal header --> */}
					<div className="flex items-start justify-between p-4 border-b rounded-t">
						<h3 className="text-xl font-semibold text-gray-900">Notice of violation</h3>
						<AiOutlineClose
							onClick={() => onClose([false, 0])}
							size={22}
							className="fixed top-4 right-4 text-white cursor-pointer hover:rotate-[360deg] transition-all duration-300 z-20"
						/>
					</div>
					{/* <!-- Modal body --> */}
					<div className="p-6 space-y-6">
						<div className="grid grid-cols-3 gap-3">
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">
									Notice sent to violators
								</label>
								<textarea
									placeholder="Message*"
									id='message'
									className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								></textarea>
							</div>
						</div>
					</div>
					{/* <!-- Modal footer --> */}
					<div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
						<button
							onClick={() => {
								handleSentClick(postID, "Violated")
							}}
							type="button"
							id="message"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Confirm
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ModalMessage;
