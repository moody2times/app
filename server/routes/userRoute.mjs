import { Router } from "express";

Router.get("/:username", (req, res) => {
	res.end("user page");
});

Router.get("/profile", (req, res) => {
	res.end("profile page");
});

export default Router;
