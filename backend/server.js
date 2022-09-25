const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
// get the routes

// config the environment variables
const dotenv = require("dotenv");
dotenv.config();

const app = express();
// connect the mongodb

app.use(express.json());

// middlewares
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://saurabh:saurabh@cluster0.zyllq9i.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connection made");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8800, () => {
  console.log("listening to port no 880");
});
