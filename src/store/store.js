import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import loaderSlice from "./loaderSlice";
import locationSlice from "./locationSlice";
//GLOBAL DATA STORE
const store = configureStore({
	reducer: { locationSlice, authSlice, loaderSlice },
});

export default store;
