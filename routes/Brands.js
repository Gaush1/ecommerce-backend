const express = require("express");
const { fetchBrands, createBrands } = require("../controller/Brand");
const router = express.Router();

router.route("/").get(fetchBrands).post(createBrands);

module.exports = router;
