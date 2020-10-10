const express = require("express");
const router = express.Router();

const { getAllExschools } = require("./controller");

router.get("/", getAllExschools);

module.exports = router;
