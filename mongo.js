const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'my_database';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB');

        // Specify the database to be used
        const db = client.db(dbName);

        // Perform operations with the connected client
        // For example, you can insert documents into a collection
        const collection = db.collection('my_collection');
        await collection.insertOne({ key: 'value' });
        console.log('Document inserted');

    } finally {
        // Close the client
        await client.close();
    }
}

// Call the main function
main().catch(console.error);
