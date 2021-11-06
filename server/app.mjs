import express from "express";
import crypto from "crypto";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

config();

const PORT = process.env.PORT || 5000;
const SECRET = process.env.SECRET;
const KEY = process.env.KEY;

const app = express();

app.use(express.json());
app.use(cookieParser(SECRET));

app.get("/", (req, res) => {
	res.cookie("pass", KEY);
	// const demoKey = crypto.randomBytes(32).toString("hex");
	res.status(200).json("Hello world!");
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
