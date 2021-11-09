import express from "express";

const router = express.Router();

//home page route
router.get("/", (req, res) => {
	res.end("home page");
});

router.get("/login", (req, res) => {
	res.end("login page");
});

router.get("/register", (req, res) => {
	res.end("register page");
});

export default router;
