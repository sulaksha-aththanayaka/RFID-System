const mongoose = require("mongoose");

const CardsSchema = mongoose.Schema({
  user_id: String,
  fname: String,
  lname:String,
  gender:String,
  designation: String,
  phn: String,
});

module.exports = mongoose.model("cards", CardsSchema);