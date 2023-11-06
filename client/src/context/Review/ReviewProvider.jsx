import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import Axios from '../../api/index'

export const ReviewContext = createContext()
const initialState = {
	reviews: null,
	isLoading: false,
	singleReview: null
}
const url = "/api/v1/reviews"
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

export const ReviewProvider = ({ children }) => {
	const getReviews = async (url) => {
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
	}

	useEffect(() => {
		getReviews(url);
	}, []);

	console.log('review render');
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ReviewContext.Provider value={{ state, dispatch }}>
			{children}
		</ReviewContext.Provider>
	);
};
