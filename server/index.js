const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect('mongodb+srv://yura:online-shop@shop-cluster.inq9dxh.mongodb.net/?retryWrites=true&w=majority', (err) => {
  console.log(err);
});

app.use('/', (req, res) => {
  res.send("Hi");
});
app.post('/send', async (req,res)=>{
  const {extProduct, codeProduct}=req.body;
  try{
    res.send(req.body);
  } catch (error){
    console.log(error);
  } 
});
app.listen(3000, () => console.log("Server is listening on port 3000"));