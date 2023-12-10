import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import Axios from '../../api/index'

export const NotificationContext = createContext()
const initialState = {
	notifications: null,
	isLoading: false,
	isLoadingType: false,
	isUpdateType: false,
}
const url = "/api/v1/notifications"
const reducer = (state, action) => {
	switch (action.type) {
		case "GET_DATA":
			return {
				...state,
				notifications: action.value,
				isLoading: false
			}
			break;
		case "SET_LOADING":
			return {
				...state,
				isLoading: true
			}
		case "TYPE_LOADING":
			return {
				...state,
				isLoadingType: action.value
			}
		case "UPDATE_TYPE":
			return {
				...state,
				isUpdateType: action.value
			}
		case "API_ERROR":
			return {
				...state,
				isLoading: false
			}
			break;
		default:
			return state;
			throw new Error(`Unhandled action type: ${action.type}`)
	}
}

export const NotificationProvider = ({ children }) => {
	const getNotifications = async (url) => {
		dispatch({ type: "SET_LOADING" });
		try {
			const res = await Axios.get(url);
			if (res.status === 200) {
				const data = res.data.data.data
				dispatch({ type: "GET_DATA", value: data });
			}
		} catch (err) {
			dispatch({ type: "API_ERROR" });
			console.log(err);
		}
	};

	useEffect(() => {
		getNotifications(url);
	}, []);

	console.log('notication render');
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<NotificationContext.Provider value={{ state, dispatch }}>
			{children}
		</NotificationContext.Provider>
	);
};
