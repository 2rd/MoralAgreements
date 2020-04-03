//Environment variables
const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

//Test server response
app.get("/message", (req, res) => {
    res.send("Hello World!");
  });



  //server start
app.listen(port, () => console.log(`INFO 381 Project listening on port ${port}!`));