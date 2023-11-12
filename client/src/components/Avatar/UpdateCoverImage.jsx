import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ImSpinner9 } from 'react-icons/im'
import { useForm } from 'react-hook-form'
import Axios from '../../api/index'
import { toast } from 'react-toastify'
import Cropper from 'react-easy-crop'
import { dataURLtoFile } from '../../utils/dataURLtoFile'
import { useAuthContext } from '../../hooks/useAuthContext'
const UpdateCoverImage = ({ file, setSelectedCoverFile }) => {

	const [isLoading, setIsLoading] = useState(false)
	const [crop, setCrop] = useState({ x: 0, y: 0 })
	const [zoom, setZoom] = useState(1)
	const [state, dispatch] = useAuthContext()
	const [croppedImage, setCroppedImage] = useState(null);
	const getCroppedImg = (src, crop, aspectRatio) => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const image = new Image();
		image.src = src;

		canvas.width = crop.width;
		canvas.height = crop.height;

		ctx.drawImage(
			image,
			crop.x,
			crop.y,
			crop.width,
			crop.height,
			0,
			0,
			crop.width,
			crop.height
		);

		const dataUrl = canvas.toDataURL('image/jpeg');

		console.log(dataUrl); // Log the dataUrl here

		return dataUrl;
	};
	const onCropComplete = useCallback((_, croppedAreaPixels) => {
		const croppedImage = getCroppedImg(
			file, // Replace with your image path
			croppedAreaPixels,
			4 / 3 // Replace with your desired aspect ratio
		);

		setCroppedImage(croppedImage);
	}, []);
	// console.log(croppedImage)
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			image: file
		},
	})
	const onSubmit = async (data) => {
		const fd = new FormData();
		fd.append('coverImage', dataURLtoFile(file, "coverImage"))
		// console.log(fd.get("avatar"))
		// console.log(fd)
		// try {
		// 	const config = {
		// 		headers: {
		// 			'content-type': 'multipart/form-data',
		// 		},
		// 	};
		// 	const res = await Axios.patch('/api/v1/users/updateMe', fd, config)
		// 	if (res.status === 200) {
		// 		// console.log(res.data.data.user)
		// 		dispatch({ type: "LOGIN", value: res.data.data.user })
		// 		toast.success("Update Cover Photo Success")
		// 		setSelectedCoverFile(null)
		// 	}
		// } catch (err) {
		// 	console.log(err)
		// 	toast.error("Update Cover Photo Failed")
		// }
	}
	return (
		<>
			<section className='fixed inset-0 m-auto w-[600px] h-fit bg-white rounded-lg z-20'>
				<div className="w-full h-full flex flex-col">
					<p className='text-base text-center font-semibold py-2 border-b'>Update Cover Photo</p>
					{
						isLoading &&
						<div className="w-full h-full absolute left-0 top-0 bg-white/80 flex justify-center items-center z-10">
							<ImSpinner9 className='animate-spin duration-500 text-primary-main' size={50} />
						</div>
					}
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='pt-2'>
						<p className='ml-4'>Preview Image:</p>
						<div className="p-2 overflow-hidden flex justify-center items-center w-full h-[400px] relative">
							<Cropper
								image={file}
								crop={crop}
								zoom={zoom}
								cropShape='rect'
								onCropChange={setCrop}
								showGrid={false}
								aspect={2}
								onCropComplete={onCropComplete}
								onZoomChange={setZoom}
							/>
						</div>
						<div className="w-full flex justify-end mt-3 border-t py-4 px-2">
							<button onClick={() => setSelectedCoverFile(null)} className='w-24 p-2 text-primary-main font-medium'>Cancel</button>
							<button type='submit' className='w-24 p-2 bg-primary-main text-white font-medium rounded-md'>Save</button>
						</div>
					</form>
				</div>
			</section>
			<motion.div className="fixed inset-0 m-auto w-screen h-screen bg-black/40 z-10"></motion.div>
		</>
	)
}

export default UpdateCoverImage