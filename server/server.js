//Environment variables
const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

//https://dev.to/lenmorld/rest-api-with-mongodb-atlas-cloud-node-and-express-in-10-minutes-2ii1
//https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
const { MongoClient } = require("mongodb");

// SERVER ROUTES
app.get("/message", (req, res) => {
  res.send("Hello World!");
});

app.get("/getQuestionaire", (req, res) => {
  console.log(req.query["ID"]);
  let recievedID = req.query["ID"];

  res.send("Recieved request to provide questionaire with id: " + recievedID);
});

//server start
app.listen(port, () =>
  console.log(`INFO 381 Project listening on port ${port}!`)
);

main();

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
async function listAllDocumentsInCollection(client) {
  documents = await client
    .db("moral_agreements")
    .collection("questionaires")
    .find()
    .toArray();
  let json = JSON.stringify(documents);
  console.log(documents);
}

async function main() {
  const uri =
    "mongodb+srv://magnusrambech:magnusrambech@moralagreements-3pdtc.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    await client.connect();

    await listDatabases(client);
    await listAllDocumentsInCollection(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
