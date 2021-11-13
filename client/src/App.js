import React from "react";
import { Navigation } from "./components/Navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { addLike, addDislike } from "./features/likes/likeSlice";
import "./styles/App.module.css";

const App = () => {
	// const like = useSelector((state) => state.like.like);
	// const dislike = useSelector((state) => state.like.dislike);
	// const dispatch = useDispatch();

	return <Navigation />;
};

export default App;
