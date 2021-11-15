import express from "express";
import { loginHandler } from "../controller/login.mjs";

const router = express.Router();

//home page route
router.post("/login", loginHandler);

router.post("/register", (req, res) => {
	res.end("register page");
});

export default router;
