import React from "react";
import { Link } from "react-router-dom";
import navStyle from "../styles/Navigation.module.css";

export const Navigation = () => {
	return (
		<div className={navStyle.banner}>
			<h1>meet-N-greet</h1>
			<Link to="/">Home</Link>
			<Link to="/profile">Profile</Link>
			<Link to="/friends">Friends</Link>
			<Link to="/settings">Settings</Link>
		</div>
	);
};
