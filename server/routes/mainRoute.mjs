import express from "express";

const router = express.Router();

//home page route
router.post("/login", (req, res) => {
	res.end("login page");
});

router.post("/register", (req, res) => {
	res.end("register page");
});

export default router;
