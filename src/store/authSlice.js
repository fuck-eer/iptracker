import { createSlice } from "@reduxjs/toolkit";

//USING REDUX TOOLKIT AND WITH THIS WE CAN UPDATE THE STORE STATE DIRECTLY, BECAUSE TOOLKIT INTERNALLY USES IMMER PACKAGE WHICH ENSURES THE IMMUTABILITY OUT OF THE BOX

const initialState = {
	userName: "",
	userId: "",
	token: "",
	identifier: "",
	expTimeStamp: "",
};

//HANDLES THE AUTHENTICATION SLICE
const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		//REDUCER FOR LOGIN
		atLogin(state, action) {
			state.identifier = action.payload.identifier;
			state.userName = action.payload.userName;
			state.userId = action.payload.userId;
			state.expTimeStamp = action.payload.expTimeStamp;
			state.token = action.payload.token;
		},
		//REDUCER FOR LOGOUT
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
