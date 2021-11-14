import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

export const Navigation = () => {
	return (
		<React.Fragment>
			<div>
				<h1>meet-N-greet</h1>
				<div>
					<Link to="/">Home</Link>
					<Link to="/profile">Profile</Link>
					<Link to="/friends">Friends</Link>
					<Link to="/settings">Settings</Link>
				</div>
			</div>
		</React.Fragment>
	);
};
