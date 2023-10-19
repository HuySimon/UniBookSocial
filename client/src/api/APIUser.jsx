import Axios from '../api/index'
import { useNavigate } from 'react-router-dom'
export const getCurrentUser = async () => {
	let currentUser = {}
	let navigate = useNavigate()
	try {
		const res = await Axios.get('/api/v1/users/me')
		if (res.status === 200) {
			currentUser = res.data.data.data
			return currentUser
		}
	} catch (err) {
		console.log(err.response)
		navigate('/')
		return null;
	}
}	