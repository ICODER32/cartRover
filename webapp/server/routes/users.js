const express = require("express");

const router = express.Router();
const User = require("../models/User");

// create a new user
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const createdUser = await User.create({ username, password });
    res.status(200).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// get a user using id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = user.password === password;
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
