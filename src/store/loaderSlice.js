import { createSlice } from "@reduxjs/toolkit";

//USING REDUX TOOLKIT AND WITH THIS WE CAN UPDATE THE STORE STATE DIRECTLY, BECAUSE TOOLKIT INTERNALLY USES IMMER PACKAGE WHICH ENSURES THE IMMUTABILITY OUT OF THE BOX

const initialState = {
	isLoading: false,
	// hasError:false
};
const loaderSlice = createSlice({
	name: "loaderSlice",
	initialState,
	reducers: {
		//JUST A FUN ONE USED FOR LOADING
		setLoading(state, action) {
			state.isLoading = action.payload;
		},
	},
});

export default loaderSlice.reducer;
export const loaderAction = loaderSlice.actions;
