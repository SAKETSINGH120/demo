const express = require("express");
const app = express();
const PORT = 8000;

app.get("/test", (req, res) => {
  res.send("Server working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
