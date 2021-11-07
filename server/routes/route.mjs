import { Router } from "express";

Router.route("/").get("login", (req, res) => {
	res.status(200);
	res.json("Test");
});
