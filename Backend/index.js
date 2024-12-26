const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const DB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mernapp";

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Example Schema and Model
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
});

const Item = mongoose.model("Item", ItemSchema);

// Example Routes
app.get("/", (req, res) => {
  res.send("Welcome to the MERN App Backend!");
});

app.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/items", async (req, res) => {
  const { name, description, price } = req.body;

  const newItem = new Item({
    name,
    description,
    price,
  });

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
