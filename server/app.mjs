import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { userCollection } from "./database/db.mjs";
import main from "./routes/mainRoute.mjs";
import user from "./routes/userRoute.mjs";

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
	res.status(200).json(KEY);
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
