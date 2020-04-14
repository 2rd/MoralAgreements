//Environment variables
const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

//Test server response
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
