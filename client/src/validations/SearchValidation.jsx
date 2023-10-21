import * as Yup from 'yup'
export const SearchSchema = Yup.object().shape({
	query: Yup.string(),
	isNew: Yup.boolean(),
	isGeneralSubject: Yup.boolean(),
	minPrice: Yup.number().typeError("Please enter a valid number").positive("Please enter positive number"),
	maxPrice: Yup.number().typeError("Please enter a valid number").positive("Please enter positive number")
})