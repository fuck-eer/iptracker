import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	// hasError:false
};
const loaderSlice = createSlice({
	name: "loaderSlice",
	initialState,
	reducers: {
		setLoading(state, action) {
			state.isLoading = action.payload;
		},
	},
});

export default loaderSlice.reducer;
export const loaderAction = loaderSlice.actions;
