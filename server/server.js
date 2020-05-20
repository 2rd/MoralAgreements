//Environment variables
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://magnusrambech:magnusrambech@moralagreements-3pdtc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect();

//server start
app.listen(PORT, () =>
  console.log(`INFO 381 Project listening on port ${PORT}!`)
);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

/**
 * Finds all documents in mongodb
 * @param {*} client mongodb client
 * @param {*} id id of document to find
 */
async function findCollectionById(client, id) {
  let query = { id: id };
  documents = await client
    .db("moral_agreements")
    .collection("questionaires")
    .find(query)
    .toArray();
  return documents;
}

// SERVER ROUTES
app.get("/message", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/", "index.html"));
});

app.get("/getQuestionaire", async (req, res) => {
  console.log(req.query["ID"]);
  let recievedID = req.query["ID"];

  let questionaire = await findCollectionById(client, recievedID);
  console.log(questionaire);
  res.send(questionaire);
});
app.post("/addQuestionaire", async (req, res) => {
  if (req.body.params.questionaire) {
    let document = req.body.params.questionaire;
    let currentHighestId = await client
      .db("moral_agreements")
      .collection("questionaires")
      .countDocuments({});

    let documentID = ("000" + (currentHighestId + 1)).slice(-4);
    document.id = documentID;
    console.log(document);
    await client
      .db("moral_agreements")
      .collection("questionaires")
      .insertOne(document);
    res.send({ id: documentID });
  } else {
    res.send("Something went wrong...");
  }
});
app.post("/postAnswers", async (req, res) => {
  if (req.body.params.summary) {
    let document = req.body.params.summary;
    client.db("moral_agreements").collection("answers").insertOne(document);
  } else {
    res.send("Something went wrong...");
  }
});
