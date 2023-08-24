var express = require("express");
var router = express.Router();
const bookController = require("../controllers/bookcontroller");
/* GET home page. */
router.get("/", bookController.getBooks);
router.post("/", bookController.createBook);
router.get("/bookandauthor", bookController.getBooksWithAuthor);
module.exports = router;
