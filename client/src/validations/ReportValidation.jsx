import * as Yup from 'yup'
export const ReportSchema = Yup.object().shape({
	content: Yup.string().required("This field is required")
})