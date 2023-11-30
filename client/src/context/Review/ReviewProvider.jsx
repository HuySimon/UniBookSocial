import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import Axios from '../../api/index'

export const ReviewContext = createContext()
const initialState = {
	reviews: null,
	isLoading: false,
	isEditReviewLoading: false,
	isAddReviewLoading: false,
	isDeleteReviewLoading: false,
}
const url = "/api/v1/reviews"
const reducer = (state, action) => {
	switch (action.type) {
		case "GET_DATA":
			return {
				...state,
				reviews: action.value,
				isLoading: false
			}
			break;
		case "ADD_REVIEW":
			return {
				...state,
				isAddReviewLoading: action.value
			}
		case "EDIT_REVIEW":
			return {
				...state,
				isEditReviewLoading: action.value
			}
			break;
		case "DELETE_REVIEW":
			return {
				...state,
				isDeleteReviewLoading: action.value
			}
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
		console.log("123")
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


	console.log('review render');
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
	useEffect(() => {
		getReviews(url);
	}, [state.isAddReviewLoading,state.isDeleteReviewLoading,state.isEditReviewLoading]);
	return (
		<ReviewContext.Provider value={value}>
			{children}
		</ReviewContext.Provider>
	);
};
