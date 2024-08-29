const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const cardsRoute = require("./routes/cards");
const dbConnect = require("./db/dbConnect");

dotEnv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is working" });
});

app.use("/cards", cardsRoute);

app.use("/", (err, req, res, next) => {
  res.status(500).json("Something Went Wrong");
});

dbConnect();
app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});

module.exports = app;
