// const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URI;
const mongoose = require("mongoose");
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

async function run() {
  // try {
  // Connect the client to the server	(optional starting in v4.7)
  //     await client.connect();
  //     // Send a ping to confirm a successful connection
  //     //     await client.db("admin").command({ ping: 1 });
  //     //     console.log(
  //     //       "Pinged your deployment. You successfully connected to MongoDB!"
  //     //     );
  //     //   } finally {
  //     //     // Ensures that the client will close when you finish/error
  //     //     await client.close();
  //     //   }
  //     const database = client.db("testDB");
  //     const data = database.collection("demo");
  //     await data.insertOne({ id: 2, name: "Kamran", email: "kamran@gmail.com" });
  //   } finally {
  //     await client.close();
  //   }
  const client = await mongoose.connect(uri);
  client.connection.db = "ProductsDB";
  console.log("Connected to Db Successfully");
}
// run().catch(console.dir);
module.exports = run;
