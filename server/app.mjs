import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import main from "./routes/mainRoute.mjs";
import user from "./routes/userRoute.mjs";
import mongoose from "./database/db.mjs";

config();

const PORT = process.env.PORT || 5000;
const SECRET = process.env.SECRET;
const KEY = process.env.KEY;

const app = express();

app.use(express.json());
app.use(cookieParser(SECRET));
app.use("/home", main);
app.use("/user", user);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
