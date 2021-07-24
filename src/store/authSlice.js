import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userName: "",
	userId: "",
	token: "",
	identifier: "",
	expTimeStamp: "",
};

const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		atLogin(state, action) {
			state.identifier = action.payload.identifier;
			state.userName = action.payload.userName;
			state.userId = action.payload.userId;
			state.expTimeStamp = action.payload.expTimeStamp;
			state.token = action.payload.token;
		},
		atLogout(state) {
			state.identifier = "";
			state.userName = "";
			state.userId = "";
			state.token = "";
			state.expTimeStamp = "";
		},
	},
});

export default authSlice.reducer;
export const authAction = authSlice.actions;
