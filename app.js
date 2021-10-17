import express from "express";
import crypto from "crypto";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	const demoKey = crypto.randomBytes(32).toString("hex");
	res.status(200).json(demoKey);
});

app.listen(3000, () => {
	console.log("running on port 3000");
});
