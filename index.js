const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/docs", (req, res) => {
  res.render("docs.ejs");
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

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
