const express = require("express");
const { getAllQueries, addQuery } = require("../controllers/queryContollers");
const router = express.Router();

router.route("/").get(getAllQueries).post(addQuery);

module.exports = router;
