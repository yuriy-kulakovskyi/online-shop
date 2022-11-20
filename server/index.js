const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

const GoodModel = require("./models/good");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://yura:online-shop@shop-cluster.inq9dxh.mongodb.net/?retryWrites=true&w=majority', (err) => {
  console.log(err);
});

app.post('/send', async (req,res)=>{

  const {extProduct, codeProduct}=req.body;
  console.log(extProduct);
  const good = new GoodModel({name: extProduct, code: codeProduct});

  try{
    await good.save();
    res.send("inserted data");
  } catch (error){
    console.log(error);
  } 
});

app.get('/read', async (req, res) => {
  GoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  })
});

app.listen(3000, () => console.log("Server is listening on port 3000"));