const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect('mongodb+srv://yura:online-shop@shop-cluster.inq9dxh.mongodb.net/?retryWrites=true&w=majority', (err) => {
  console.log(err);
});

app.use('/', (req, res) => {
  res.send("Hi");
});

app.listen(3000, () => console.log("Server is listening on port 3000"));