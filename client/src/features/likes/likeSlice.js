import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
	name: "likes",
	initialState: {
		like: 0,
		dislike: 0,
	},
	reducers: {
		addLike: (state) => {
			state.like += 1;
		},
		addDislike: (state) => {
			state.dislike += 1;
		},
	},
});

export const { addLike, addDislike } = likeSlice.actions;

export default likeSlice.reducer;
