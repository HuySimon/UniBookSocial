import * as Yup from 'yup'

export const addUserSchema = Yup.object().shape({
	email: Yup.string().lowercase().trim().email('Invalid email format').required('Please enter your email'),
	firstName: Yup.string().trim().required("Enter first name"),
	lastName: Yup.string().trim().required("Enter last name"),
	phoneNumber: Yup.string()
		.required('Please enter phone number')
		.matches(
			/^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
			'Invalid Phone Number',
		),
	role: Yup.string().typeError("Please choose one").required("Please choose one"),
	password: Yup.string()
		.required('Please enter password')
		.matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			'Password must contain at least 8 characters, one uppercase, one number and one special case character.Ex(John123@)',
		),
})