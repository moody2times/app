import express from "express";
import { loginHandler } from "../controller/login.mjs";
import { registerHandler } from "../controller/register.mjs";
import { homeHandler } from "../controller/home.mjs";

const router = express.Router();

//home page route
router.get("/", homeHandler);

router.get("/login", loginGetter);
router.get("/register", registerGetter);
router.post("/login", loginHandler);

router.post("/register", registerHandler);

export default router;
