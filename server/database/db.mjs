import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "catch_up";
const collection = "user";

const mongoClient = new MongoClient(url);
mongoClient.connect((error, client) => {
	if (error) {
		client.close();
	}
	const db = client.db(dbName);
	const collections = db.collection(collection);
});

export default mongoClient.collections;
