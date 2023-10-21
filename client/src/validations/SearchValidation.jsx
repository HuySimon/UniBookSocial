import * as Yup from 'yup'
export const SearchSchema = Yup.object().shape({
	minPrice: Yup.number().typeError("Please enter a valid number").positive("Please enter positive number"),
	maxPrice: Yup.number().typeError("Please enter a valid number").positive("Please enter positive number")
})