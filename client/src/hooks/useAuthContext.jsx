import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
export const useAuthContext = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error("useAuthContext must be used within a AuthProvider");
	}
	return [context.state, context.dispatch];
}