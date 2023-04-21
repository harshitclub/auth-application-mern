const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello Everyone, This is Harshit Kumar");
});

app.listen(PORT, () => {
  console.log(`Server Starts At ${PORT}`);
});
