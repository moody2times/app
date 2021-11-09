import { Router } from "express";
const userRouter = Router();

userRouter.get("/:username", (req, res) => {
	res.end("user page");
});

export default userRouter;
