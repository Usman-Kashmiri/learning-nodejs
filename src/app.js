const express = require("express");
const app = express();
const router = require("./router");

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
