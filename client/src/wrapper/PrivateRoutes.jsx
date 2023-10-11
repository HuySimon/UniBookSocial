import { toast } from "react-toastify";
import { useAuthContext } from "../hooks/useAuthContext";
import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
	const [state, dispatch] = useAuthContext();

	if (!state.isAuthenticated) {
		console.log('re-render');
		toast.warning("You have not logged in!");
		return <Navigate to="/" />;
	}
	// Render children directly without returning them as a value
	return children;
};
export default PrivateRoutes;
