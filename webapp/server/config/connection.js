const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://m001-student:Ibtisam@sandbox.xuwkkn8.mongodb.net/FYPDB?retryWrites=true&w=majority"
    );
    console.log("MongoDB connection success");
  } catch (error) {
    console.log("MongoDB connection failed");
    process.exit(1);
  }
};

module.exports = connectDb;
