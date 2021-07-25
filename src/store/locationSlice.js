import { createSlice } from "@reduxjs/toolkit";

//USING REDUX TOOLKIT AND WITH THIS WE CAN UPDATE THE STORE STATE DIRECTLY, BECAUSE TOOLKIT INTERNALLY USES IMMER PACKAGE WHICH ENSURES THE IMMUTABILITY OUT OF THE BOX  


const initialState = {
	ip: "",
	location: {
		country: "",
		region: "",
		city: "",
		postalCode: "",
		timeZone: "",
	},
	latitude: "",
	longitude: "",
	isp: "",
	proxy: "",
};

const locationSlice = createSlice({
	name: "locationSlice",
	initialState,
	reducers: {
		//SET FETCHED LOCATON & IPDETAILS IN LOCATION STATE IN THE STORE
		setIp(state, action) {
			state.ip = action.payload.ip;
			state.latitude = action.payload.location.lat;
			state.longitude = action.payload.location.lng;
			state.isp = action.payload.isp;
			state.proxy = action.payload.proxy;
			state.location = {
				country: action.payload.location.country,
				region: action.payload.location.region,
				city: action.payload.location.city,
				postalCode: action.payload.location.postalCode,
				timeZone: action.payload.location.timezone,
			};
		},
	},
});

export const locationActions = locationSlice.actions;
export default locationSlice.reducer;
