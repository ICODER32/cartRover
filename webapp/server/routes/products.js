const Product = require("../models/Products");
const express = require("express");
const router = express.Router();

// create a new Product

router.post("/add", async (req, res) => {
  try {
    const { name, price, images, description, category } = req.body;

    const createdProduct = await Product.create({
      name,
      price,
      images,
      description,
      category,
    });

    res
      .status(200)
      .json({ createdProduct, message: "Product created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get all Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get a Product using id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
