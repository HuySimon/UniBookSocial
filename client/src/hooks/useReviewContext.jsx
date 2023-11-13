import React, { useContext } from "react";
import { ReviewContext } from "../context/Review/ReviewProvider";
export const useReviewContext = () => {
	const context = useContext(ReviewContext)
	if (!context) {
		throw new Error("useReviewContext must be used within a ReviewProvider");
	}
	return [context.state, context.dispatch];
}