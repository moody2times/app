import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLike, addDislike } from "./features/likes/likeSlice";
import "./styles/App.css";

function App() {
	const like = useSelector((state) => state.like.like);
	const dislike = useSelector((state) => state.like.dislike);
	const dispatch = useDispatch();

	const handleLikeClick = () => {
		dispatch(addLike());
	};

	const handleDislikeClick = () => {
		dispatch(addDislike());
	};

	return (
		<React.Fragment>
			<h1>Meet</h1>
			<p>{like}</p>
			<p>{dislike}</p>
			<button onClick={handleLikeClick}>Like</button>
			<button onClick={handleDislikeClick}>Dislike</button>
		</React.Fragment>
	);
}

export default App;
