import { Router } from "express";
import { users } from "../controller/users.mjs";
const userRouter = Router();

userRouter.get("/:username", (req, res) => {
	res.end("user page");
});

export default userRouter;
