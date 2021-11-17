import { Router } from "express";
import { users } from "../controller/users.mjs";
const userRouter = Router();

userRouter.get("/:username", users);

export default userRouter;
