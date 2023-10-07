import { createContext, useEffect, useMemo, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
	isAuthorized: localStorage.getItem("auth"),
	user: JSON.parse(localStorage.getItem("user"))
}

const reducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			// Save user information and isAuthorized to localStorage
			localStorage.setItem("user", JSON.stringify({
				user: action.value,
			}));
			localStorage.setItem("auth", JSON.stringify({
				isAuthorized: true,
			}))
			return {
				...state,
				user: action.value,
				isAuthorized: true
			};
		case "LOGOUT":
			// Remove user information and isAuthorized from localStorage
			localStorage.removeItem("user");
			localStorage.setItem("auth", false)
			return {
				...state,
				user: {},
				isAuthorized: false
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}
