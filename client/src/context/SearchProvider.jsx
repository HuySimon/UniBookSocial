import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import Axios from '../api/index'
export const SearchContext = createContext();


export const SearchProvider = ({ children }) => {

	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	// Load data from localStorage when the component mounts.
	useEffect(() => {
		const storedSearchValue = localStorage.getItem('searchValue');
		const storedSearchResults = localStorage.getItem('searchResults');

		if (storedSearchValue) {
			setSearchValue(storedSearchValue);
		}

		if (storedSearchResults) {
			setSearchResults(JSON.parse(storedSearchResults));
		}
	}, []);

	const updateSearch = (value,data) => {
		setSearchValue(value);
		// Implement your search logic here and update searchResults.
		// For this example, we'll set it to an empty array.
		setSearchResults(data);
	};
	// Memoize the context value and derived values for better performance.
	const memoizedSearchResults = useMemo(() => searchResults, [searchResults]);
	const memoizedContextValue = useMemo(
		() => ({
			searchValue,
			searchResults: memoizedSearchResults,
			updateSearch,
		}),
		[searchValue, memoizedSearchResults, updateSearch]
	);

	// Save data to localStorage whenever searchValue or searchResults change.
	useEffect(() => {
		localStorage.setItem('searchValue', searchValue);
		localStorage.setItem('searchResults', JSON.stringify(searchResults));
	}, [searchValue, searchResults]);

	return (
		<SearchContext.Provider value={memoizedContextValue}>
			{children}
		</SearchContext.Provider>
	)
}