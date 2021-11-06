import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "catch_up";
const collection = "user";

const mongoClient = new MongoClient(url);
mongoClient.connect((error, client) => {
	const db = client.db(dbName);
	const collections = db.collection(collection);
});
