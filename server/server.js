const express = require("express");
const path = require("path");

const app = express();
const port = 4001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("index.html");
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}!`);
});
