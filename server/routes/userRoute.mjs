import { Router } from "express";
const userRouter = Router();

userRouter.get("/:username", (req, res) => {
	res.end("user page");
});

userRouter.get("/profile", (req, res) => {
	res.end("profile page");
});

export default userRouter;
