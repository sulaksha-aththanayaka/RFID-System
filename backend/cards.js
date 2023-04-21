const mongoose = require("mongoose");

const CardsSchema = mongoose.Schema({
  user_id: String,
  name: String,
  phn: String,
});

module.exports = mongoose.model("cards", CardsSchema);