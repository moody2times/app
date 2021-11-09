import mongoose from "mongoose";

const URI = "http://localhost:27017/meet_n_greet";

mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log("connected to mongodb");
	})
	.catch((error) => {
		console.log(error.message);
	});
