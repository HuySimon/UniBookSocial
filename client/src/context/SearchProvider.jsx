import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import Axios from '../api/index'
export const SearchContext = createContext();


export const SearchProvider = ({ children }) => {

	const [searchValues, setSearchValues] = useState({
		query: '',
		isNew: -1,
		isGeneralSubject: -1,
		minPrice: '',
		maxPrice: '',
	});
	const [searchResults, setSearchResults] = useState([]);

	// Load data from localStorage when the component mounts.
	useEffect(() => {
		const storedSearchValue = localStorage.getItem('searchValue');
		const storedSearchResults = localStorage.getItem('searchResults');

		if (storedSearchValue) {
			setSearchValues(storedSearchValue);
		}

		if (storedSearchResults) {
			setSearchResults(JSON.parse(storedSearchResults));
		}
	}, []);

	const updateSearch = (newSearchValue, data) => {
		if (newSearchValue != null) {
			const updatedSearchValue = { ...searchValues, ...newSearchValue };
		}else {
			const updatedSearchValue = { ...searchValues };
		}
		setSearchValues(updatedSearchValue);
		setSearchResults(data);
	};
	const clearSearch = () => {
		setSearchValues({
			query: '',
			isNew: -1,
			isGeneralSubject: -1,
			minPrice: '',
			maxPrice: '',
		});
		setSearchResults([]);
	};
	// Memoize the context value and derived values for better performance.
	const memoizedSearchResults = useMemo(() => searchResults, [searchResults]);
	const memoizedContextValue = useMemo(
		() => ({
			searchValues,
			searchResults: memoizedSearchResults,
			updateSearch,
			clearSearch
		}),
		[searchValues, memoizedSearchResults, updateSearch, clearSearch]
	);

	// Save data to localStorage whenever searchValue or searchResults change.
	useEffect(() => {
		localStorage.setItem('searchValue', JSON.stringify(searchValues));
		localStorage.setItem('searchResults', JSON.stringify(searchResults));
	}, [searchValues, searchResults]);

	return (
		<SearchContext.Provider value={memoizedContextValue}>
			{children}
		</SearchContext.Provider>
	)
}