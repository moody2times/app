import mongoose from "mongoose";

const URI = "mongodb://127.0.0.1:27017/meet_n_greet";

mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connected to mongodb");
	})
	.catch((error) => {
		console.log(error.message);
	});

mongoose.connection.on("connection", () =>
	console.log("Connection established!")
);

mongoose.connection.on("connected", () => console.log("Connected to DB"));

mongoose.connection.on("disconnected", () => console.log("Connection lost"));

export default mongoose;
