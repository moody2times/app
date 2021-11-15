import express from "express";
import { loginHandler } from "../controller/login.mjs";
import { registerHandler } from "../controller/register.mjs";

const router = express.Router();

//home page route
router.post("/login", loginHandler);

router.post("/register", registerHandler);

export default router;
