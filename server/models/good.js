const mongoose = require("mongoose");

const GoodSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },

  picture: {
    type: String,
    required: false
  },

  code: {
    type: String,
    required: true
  }
});

const Good = mongoose.model("GoodData", GoodSchema);
module.exports = Good;