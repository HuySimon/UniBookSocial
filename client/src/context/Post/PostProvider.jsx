import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import Axios from '../../api/index'

export const PostsContext = createContext()
const initialState = {
	posts: null,
	isLoading: false,
	createPost: null,
	isLoadingEdit: false,
}
const url = "/api/v1/posts?filter=equals(status,'Unconfirmed')&include=userPostData&sort=-createdAt"
const reducer = (state, action) => {
	switch (action.type) {
		case "GET_DATA":
			return {
				...state,
				posts: action.value,
				isLoading: false
			}
			break;
		case "CREATE_ONE_POST":
			// Merge createPost into the posts array
			const updatedPosts = [...state.posts, action.value];
			return {
				...state,
				posts: updatedPosts,
				isLoading: false
			};
		case "EDIT_POST":
			return {
				...state,
				isLoadingEdit: true
			}
			break;
		case "EDIT_POST_LOADING":
			return {
				...state,
				isLoadingEdit: false
			}
			break;
		case "SET_LOADING_ALL_POST":
			return {
				...state,
				isLoading: action.value
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
		dispatch({ type: "SET_LOADING_ALL_POST", value: true });
		try {
			const res = await Axios.get(url);
			if (res.status === 200) {
				let sortedData = res.data.data.data
				sortedData.sort((a, b) =>
					Date.parse(b.createdAt) - Date.parse(a.createdAt)
				)
				dispatch({ type: "GET_DATA", value: sortedData });
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
