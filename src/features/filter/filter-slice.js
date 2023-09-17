import { createSlice } from "@reduxjs/toolkit"

const filtersSlice = createSlice({
	name: '@@filter',
	initialState: [],
	reducers: {
		addFilter: (state, action) => {
			if (!state.includes(action.payload)) {
				state.push(action.payload)
			}
		},
		removeFilter: (state, action) => {
			return state.filter(filter => filter !== action.payload)
		},
		clearFilters: () => []
	}
})

export const { addFilter, removeFilter, clearFilters } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer

export const selectFilters = (state) => state.filters