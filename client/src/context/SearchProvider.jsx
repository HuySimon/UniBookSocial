import { createContext, useEffect, useMemo, useReducer } from "react";
import Axios from '../api/index'
export const SearchContext = createContext();


export const SearchProvider = ({ children }) => {

	

	return (
		<SearchContext.Provider>
			{children}
		</SearchContext.Provider>
	)
}