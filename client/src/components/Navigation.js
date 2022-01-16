import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.module.css";

const Navigation = () => {
	return (
		<div className=".banner">
			<h1>Nakama</h1>
			<Link to="/">Home</Link>
			<Link to="/profile">Profile</Link>
			<Link to="/friends">Friends</Link>
			<Link to="/settings">Settings</Link>
		</div>
	);
};

export default Navigation;
