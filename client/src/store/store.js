import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "../features/likes/likeSlice";

const store = configureStore({
	reducer: {
		like: likeReducer,
	},
});

export default store;
