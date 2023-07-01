const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

const { quotes, kataBijak, newObject } = require("./src/lib/data");

app.get("/api", (req, res) => {
  res.json(newObject);
});

app.get("/api/quote", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const no = Math.floor(Math.random() * quotes.length);
  res.json({ no: no, quotes: randomQuote });
});

app.get("/api/katabijak", (req, res) => {
  const randomBijak = kataBijak[Math.floor(Math.random() * kataBijak.length)];
  const no = Math.floor(Math.random() * kataBijak.length);
  res.json({ no: no, katabijak: randomBijak });
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
