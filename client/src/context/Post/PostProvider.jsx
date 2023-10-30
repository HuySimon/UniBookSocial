import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import Axios from '../../api/index'

export const PostsContext = createContext()
const initialState = {
	posts: null,
	isLoading: false,
	createPost: null
}
const url = "/api/v1/posts?filter=equals(status,'Unconfirm')&include=userPostData&sort=-createdAt"
const reducer = (state, action) => {
	switch (action.type) {
		case "GET_DATA":
			return {
				...state,
				posts: action.value,
				isLoading: false
			}
			break;
		case "UPDATE_DATA":
			// Merge createPost into the posts array
			const updatedPosts = [...state.posts, action.value];
			return {
				...state,
				posts: updatedPosts,
				isLoading: false
			};
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

export const PostProvider = ({ children }) => {
	const getPosts = async (url) => {
		dispatch({ type: "SET_LOADING" });
		try {
			const res = await Axios.get(url);
			if (res.status === 200) {
				dispatch({ type: "GET_DATA", value: res.data.data.data });
			}
		} catch (err) {
			dispatch({ type: "API_ERROR" });
			console.log(err);
		}
	};

	useEffect(() => {
		getPosts(url);
	}, []);

	console.log('post render');
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<PostsContext.Provider value={{ state, dispatch }}>
			{children}
		</PostsContext.Provider>
	);
};
