const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Welcome to CICD Deployment! This is a demo application.");
});

app.get("/test", (req, res) => {
  res.send("Server working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
