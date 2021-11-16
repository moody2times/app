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
app.use("/home", main);
app.use("/user", user);

app.use(express.json());
app.use(cookieParser(SECRET));

app.get("/", (req, res) => {
	res.cookie("pass", KEY);
	// userCollection.insertOne({ user: "moody" });
	res.status(200);
	res.end("<h1>Hello world!</h1>");
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
