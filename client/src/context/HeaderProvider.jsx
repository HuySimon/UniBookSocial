import { createContext, useEffect, useReducer } from "react";

// Create a context
export const HeaderContext = createContext();

// Define a reducer function
const headerReducer = (state, action) => {
	switch (action.type) {
		case "SET_ACTIVE_BUTTON":
			return { activeButton: action.payload };
		default:
			return state;
	}
};

export const HeaderProvider = ({ children }) => {
	// Initialize state using useReducer
	const [stateHeader, dispatchHeader] = useReducer(headerReducer, {
		activeButton: null,
	});

	// Load the active button state from local storage on component mount
	useEffect(() => {
		const storedActiveButton = localStorage.getItem("activeButton");
		if (storedActiveButton) {
			dispatchHeader({ type: "SET_ACTIVE_BUTTON", payload: storedActiveButton });
		}
	}, []);

	// Save the active button state to local storage whenever it changes
	useEffect(() => {
		localStorage.setItem("activeButton", stateHeader.activeButton);
	}, [stateHeader.activeButton]);

	return (
		<HeaderContext.Provider value={{ stateHeader, dispatchHeader }}>
			{children}
		</HeaderContext.Provider>
	);
};
