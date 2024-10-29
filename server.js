"use strict";

import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

let articles = [
  { title: "Title 1" },
  { title: "Title 2" },
  { title: "Title 3" },
];

app.get("/", (req, res) => {
  res.json({ message: "Hello World!!" });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", (req, res) => {
  const article = { title: req.body.title };
  articles.push(article);
  console.log(`Added article: ${article.title}`);
  res.status(201).json({ message: "Article created", article });
});

app.get("/articles/:id", (req, res) => {
  const { id } = req.params;
  const article = articles[id];

  if (article) {
    console.log(`Fetching article: ${id}`);
    res.json(article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
