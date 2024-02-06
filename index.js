const express = require("express");
const connect = require("./db");
const cors = require("cors");
require("dotenv").config();

const server = express();
let port = process.env.PORT || 8000;

//middleware
server.use(express.json());
server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);

//Router Imports
const product = require("./routes/Products");
const brands = require("./routes/Brands");
const categories = require("./routes/Category");

connect();

// Routes
server.use("/products", product);
server.use("/brands", brands);
server.use("/categories", categories);

// Server listening
server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
