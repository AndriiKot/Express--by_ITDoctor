"use strict";

import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello, World from Express!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
