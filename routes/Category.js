const express = require("express");
const { fetchCategory, createCategory } = require("../controller/Category");
const router = express.Router();

router.route("/").get(fetchCategory).post(createCategory);

module.exports = router;
