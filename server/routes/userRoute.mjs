import { Router } from "express";
import { userHandler } from "../controller/users.mjs";
const userRouter = Router();

userRouter.get("/:username", userHandler);

export default userRouter;
