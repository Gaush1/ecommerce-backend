const express = require("express");
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require("../controller/Product");
const router = express.Router();

router.route("/").post(createProduct).get(fetchAllProducts);

router.route("/:id").get(fetchProductById).patch(updateProduct);

module.exports = router;
