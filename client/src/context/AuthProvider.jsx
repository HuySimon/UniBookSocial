import { createContext, useEffect, useMemo, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
	isAuthorized: false,
	user: {}
}

const reducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				user: action.value,
				isAuthorized: true
			}
			break;
		case "LOGOUT":
			return {
				...state,
				user: {},
				isAuthorized: false
			}
			break;
		default:
			throw new Error(`Unhanded action type: ${action.type}`)
	}
}

export const AuthProvider = ({ children }) => {

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'))

		if (user) {
			dispatch({ type: 'LOGIN', value: user })
		}
	}, [])

	const [state, dispatch] = useReducer(reducer, initialState)

	const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}
