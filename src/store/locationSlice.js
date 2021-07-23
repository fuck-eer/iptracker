import { createSlice } from "@reduxjs/toolkit";

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
