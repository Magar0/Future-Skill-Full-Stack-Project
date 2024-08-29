const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Cards = mongoose.models.Cards || mongoose.model("Cards", cardSchema);

module.exports = Cards;
