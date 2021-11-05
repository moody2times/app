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
app.use(cookieParser(KEY));

app.get("/", (req, res) => {
	const demoKey = crypto.randomBytes(32).toString("hex");
	res.status(200).json(demoKey);
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
