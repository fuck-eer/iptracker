import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";
const store = configureStore({
	reducer: { locationSlice },
});

export default store;
