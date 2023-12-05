import * as Yup from 'yup'

export const changePasswordSchema = Yup.object().shape({
	passwordCurrent: Yup.string().required("Please enter old password").trim(),
	password: Yup.string().required("Please enter password").matches(
		/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
		"Must contain at least 8 characters, one uppercase, one number and one special character.Ex(John123@)"
	),
	passwordConfirm: Yup.string().required("Please enter confirm password").oneOf([Yup.ref('password')], 'Confirm Password not match!!')
})

export const informationSchema = Yup.object().shape({

})

// export const changeInformationSchema = Yup.object().shape({
// 	firstName: Yup.string().trim().required("Please enter first name"),
// 	lastName: Yup.string().trim().required("Please enter last name"),
// 	email: Yup.string().trim().email("Invalid Email Format").required("Please enter email"),
// 	phoneNumber: Yup.string().required("Please enter your phone").matches(
// 		/^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
// 		'Invalid Phone Number',
// 	),
// 	linkFacebook: Yup.string().trim().required("Please insert your Facebook"),
// 	linkInstagram: Yup.string().trim().required("Please insert your Instagram"),
// 	linkZalo: Yup.string().trim().required("Please insert your Zalo")
// })
export const changeInformationSchema = Yup.object().shape({
	firstName: Yup.string().trim().max(100, "The max length of first name is 100 characters"),
	lastName: Yup.string().trim().max(100, "The max length of last name is 100 characters"),
	username: Yup.string().trim().max(100, "The max length of username is 100 characters"),
	email: Yup.string().trim().email("Invalid Email Format")
})

export const updateAvatarSchema = Yup.object().shape({
	image: Yup.mixed().typeError("Please choose an image").required('Please upload an image')
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
})