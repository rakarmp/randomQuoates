const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

const { quotes, kataBijak } = require("./src/lib/data");

app.get("/quote", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quotes: randomQuote });
});

app.get("/katabijak", (req, res) => {
  const randomBijak = kataBijak[Math.floor(Math.random() * kataBijak.length)];
  res.json({ "kata bijak": randomBijak });
});

app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log(`[INFO] server is running on port: ${port}`);
  }
});

module.exports = app;
