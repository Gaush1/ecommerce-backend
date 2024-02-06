const mongoose = require("mongoose");

async function connect() {
    try {
      await mongoose.connect("mongodb://localhost:27017/ecommerce");
      console.log("Connected to mongoDB");
    } catch (error) {
      console.log("Error in connecting database", error.message);
    }
}

module.exports = connect;