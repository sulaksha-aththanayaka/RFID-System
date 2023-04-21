const mongoose = require("mongoose");

const CombinedSchema = mongoose.Schema({
  key_id: String,
  user_id: String,
//   place: String,
//   name: String
});

module.exports = mongoose.model("combinedData", CombinedSchema);