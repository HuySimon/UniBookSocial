import React, { useState } from 'react';

function FileUploadWithPreview() {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setSelectedFile(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="w-full flex flex-col">
			<span className='block mb-1 text-gray-400'>Core Image:</span>
			<div className="flex items-center justify-center w-full">
				<label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
					<div className="flex flex-col items-center justify-center pt-5 pb-6">
						<input
							id="dropzone-file"
							type="file"
							className="hidden"
							onChange={handleFileChange}
						/>
						<img
							id="preview-image"
							src={selectedFile}
							alt="Preview"
							style={{
								maxWidth: '100%',
								maxHeight: '200px',
								display: selectedFile ? 'block' : 'none',
							}}
						/>
						<p className="mb-2 text-sm text-primary-500 font-medium">
							<span className="font-medium !text-black">Drag & drop files or</span> browse files
						</p>
						<p className="text-xs text-gray-500">JPG, PNG or GIF - Max file size 2MB</p>
					</div>
				</label>
			</div>
		</div>
	);
}

export default FileUploadWithPreview;
