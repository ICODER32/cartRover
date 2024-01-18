const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "Product",
  },
});

module.exports = mongoose.model("User", UserSchema);
