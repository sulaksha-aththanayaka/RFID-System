const mongoose = require("mongoose");

const CombinedSchema = mongoose.Schema({
  key_id: String,
  user_id: String,
  fname: String,
  lname: String,
  place: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("combinedData", CombinedSchema);

