import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Veuillez définir MONGODB_URI dans .env");
}

if (process.env.NODE_ENV === "development") {
  // Reuse client during hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En prod, une seule instance
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
