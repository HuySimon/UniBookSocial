import * as Yup from 'yup'

export const createPostSchema = Yup.object().shape({
	title: Yup.string().required("Please enter title"),
	price: Yup.number().required("Please enter price"),
	mainImage: Yup.mixed().required('Please upload an image')
		.test('fileSize', 'File size is too large (> 2MB)', (value) => {
			if (!value) return true; // No file was selected, so skip this test
			return value.size <= 2 * 1024 * 1024; // 2MB
		})
		.test('fileType', 'Invalid file type', (value) => {
			if (!value) return true; // No file was selected, so skip this test
			const allowedExtensions = ['jpg', 'jpeg', 'png'];
			const fileType = value.type.split('/').pop();
			return allowedExtensions.includes(fileType);
		}),
	description: Yup.string().required("Please enter description"),
	isNew: Yup.boolean().required("Please select one"),
	isGeneralSubject: Yup.boolean().required("Please select one")
})

export const editPostSchema = Yup.object().shape({
	title: Yup.string(),
	price: Yup.number(),
	mainImage: Yup.mixed(),
	description: Yup.string(),
	isNew: Yup.boolean(),
	isGeneralSubject: Yup.boolean()
})