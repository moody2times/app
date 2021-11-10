import mongoose from "mongoose";

const URI = "mongodb://127.0.0.1:27017/meet_n_greet";

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

export default mongoose;
