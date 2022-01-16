import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Home from "./components/Home";
// import { useSelector, useDispatch } from "react-redux";
// import { addLike, addDislike } from "./features/likes/likeSlice";
import "./styles/App.css";

const App = () => {
	// const like = useSelector((state) => state.like.like);
	// const dislike = useSelector((state) => state.like.dislike);
	// const dispatch = useDispatch();

	return (
		<React.Fragment>
			<Navigation />
			<Switch>
				<Route path="/settings"></Route>
				<Route path="/" component={Home}></Route>
				<Redirect to="/" />
			</Switch>
			;
		</React.Fragment>
	);
};

export default App;
