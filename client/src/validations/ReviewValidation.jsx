import * as Yup from 'yup'
export const addReviewSchema = Yup.object().shape({
	content: Yup.string().required("Please enter content").max(150, "You can only type 150 characters!")
})