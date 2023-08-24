var express = require("express");
var router = express.Router();
const authorController = require("../controllers/authorcontroller");
/* GET home page. */
router.get("/", authorController.listAuthors);
router.post("/", authorController.createAuthor);

module.exports = router;
