const express = require("express");

const pingRouter = require("./routes/ping");

const app = express();

app.use(express.json());

app.use("/api/ping", pingRouter);

module.exports = app;