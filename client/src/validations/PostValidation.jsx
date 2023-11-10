import * as Yup from 'yup'

export const createPostSchema = Yup.object().shape({
	title: Yup.string().required("Please enter title"),
	price: Yup.number().typeError("Price must be a number").positive("Must be a positive value").required("Please enter price"),
	mainImage: Yup.mixed().typeError("Please choose an image").required('Please upload an image')
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
	isNew: Yup.boolean().typeError("Please choose one").required("Please select one"),
	isGeneralSubject: Yup.boolean().typeError("Please choose one").required("Please select one")
})

export const editPostSchema = Yup.object().shape({
	title: Yup.string(),
	price: Yup.number().typeError("Price must be a number").positive("Must be a positive value"),
	mainImage: Yup.mixed().typeError("Please choose an image").required('Please upload an image'),
	description: Yup.string(),
	isNew: Yup.boolean().typeError("Please choose one"),
	isGeneralSubject: Yup.boolean().typeError("Please choose one")
})