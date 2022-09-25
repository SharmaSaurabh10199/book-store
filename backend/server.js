const express = require("express");
const mongoose = require("mongoose");

// get the routes

// config the environment variables
const dotenv = require("dotenv");
dotenv.config();

const app = express();
// connect the mongodb

app.use(express.json());

// middlewares
app.use("/", (req, res) => {
  res.send("welcome");
});

mongoose
  .connect(process.env.Mongo_Url)
  .then(() => {
    console.log("connection made");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8800, () => {
  console.log("listening to port no 880");
});
