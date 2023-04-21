const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const cardsCollection = mongoose.connection.collection("cards");

router.get("/cards", async (req, res) => {
  try {
    const cards = await cardsCollection.find({}).toArray();
    res.json(cards);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
