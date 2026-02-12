import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!!!!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
