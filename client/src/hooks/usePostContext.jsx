import React, { useContext } from "react";
import { PostsContext } from "../context/Post/PostProvider";
export const usePostContext = () => {
	const context = useContext(PostsContext)
	if (!context) {
		throw new Error("usePostContext must be used within a PostProvider");
	}
	return [context.state, context.dispatch];
}