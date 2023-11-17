import { createContext, useEffect, useMemo, useReducer } from "react";
import Axios from '../api/index'
export const AuthContext = createContext();

const initialState = {
	isAuthorized: localStorage.getItem("auth") || false,
	user: JSON.parse(localStorage.getItem("user")) || {},
	isLoading: false
}
const url = '/api/v1/users/me'
const reducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			// Save user information and isAuthorized to localStorage
			localStorage.setItem("user", JSON.stringify({
				user: action.value,
			}));
			localStorage.setItem("auth", true)
			return {
				...state,
				user: JSON.parse(localStorage.getItem("user")),
				isLoading: true,
				isAuthorized: true
			};
		case "LOGOUT":
			localStorage.setItem("user", JSON.stringify({}));
			localStorage.setItem("auth", false)
			return {
				...state,
				isLoading: false,
				isAuthorized: false
			};
		case "RESET_PASSWORD":
			return {
				...state,
				resetPasswordToken: action.value,
				email: action.email,
			}
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	console.log('context render')
	const value = useMemo(() => ({ state, dispatch }), [state, dispatch])


	useEffect(() => {
		// Initialize localStorage if not already set
		if (localStorage.getItem("auth") === null) {
			localStorage.setItem("auth", false);
		}
		if (localStorage.getItem("user") === null) {
			localStorage.setItem("user", JSON.stringify({}));
		}
	}, []);

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}
