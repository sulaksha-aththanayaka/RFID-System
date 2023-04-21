const mongoose = require("mongoose");

const KeysSchema = mongoose.Schema({
  key_id: String,
  place: String,
});

module.exports = mongoose.model("keys", KeysSchema);