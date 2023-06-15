const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    const { connection } = await mongoose.connect(
      "mongodb://127.0.0.1:27017/first_mongodb"
    );
    console.log(`MongoDB Connected: ${connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
