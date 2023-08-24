console.log("Products router file ran");
var express = require("express");
var productFunctions = require("../controllers/productscontroller");
var router = express.Router();
router.get("/", productFunctions.indexController);
router.get("/tshirt/:price", productFunctions.tshirtController);
module.exports = router;
