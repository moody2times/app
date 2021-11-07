import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const options = {
	useNewUrlParser: true,
	maxPoolSize: 20,
	waitQueueTimeoutMS: 2500,
};
const dbName = "meetNgreet";
const collection = "user";

const client = new MongoClient(url, options);
client.connect();

const db = client.db(dbName);
export const userCollection = db.collection(collection);
