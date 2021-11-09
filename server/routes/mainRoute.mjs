import { Router } from "express";

//home page route
Router.get("/", (req, res) => {
	res.end("home page");
});

Router.get("/login", (req, res) => {
	res.end("login page");
});

Router.get("/register", (req, res) => {
	res.end("register page");
});

export default Router;
