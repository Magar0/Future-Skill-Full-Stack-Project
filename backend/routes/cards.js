const express = require("express");
const Cards = require("../db/model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await Cards.create({ title, description });
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Cards.find();
    if (response.length === 0) {
      return res.status(400).json({ message: "no card found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Error" });
  }
});

router.get("/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const response = await Cards.find({
      title: { $regex: new RegExp(title, "i") },
    });
    if (response.length === 0) {
      return res.status(400).json({ message: "no card found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Error" });
  }
});

module.exports = router;
