const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.post("/add", async (req, res) => {
  console.log(req.body);
  try {
    const { user, product } = req.body;
    const cart = await User.updateOne(
      { _id: user },
      { $push: { cart: product } }
    );
    res.status(200).json({ cart, message: "Product added to cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// remove a product from cart

router.post("/remove", async (req, res) => {
  try {
    const { user, product } = req.body;
    const cart = await User.updateOne(
      { _id: user },
      { $pull: { cart: product } }
    );
    res.status(200).json({ cart, message: "Product removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
