const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "../docker/dist/")));

app.get("/", (req, res) => {
  res.redirect("home");
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}!`);
});
