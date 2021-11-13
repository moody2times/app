import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

export const Navigation = () => {
	return (
		<React.Fragment>
			<div className={styles.navigation}>
				<h1 className={styles.heading}>meet-N-greet</h1>
			</div>
			<div>
				<Link to="/">Home</Link>
				<Link to="/profile">Profile</Link>
				<Link to="/friends">Friends</Link>
				<Link to="/settings">Settings</Link>
			</div>
		</React.Fragment>
	);
};
