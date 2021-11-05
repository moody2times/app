import express from "express";
import crypto from "crypto";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	const demoKey = crypto.randomBytes(32).toString("hex");
	res.status(200).json(demoKey);
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
