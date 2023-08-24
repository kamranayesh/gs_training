const express = require("express");
const router = express.Router();
const jwtController = require("../controllers/jwtcontroller");
router.post("/", jwtController.createUser);
router.get("/", jwtController.listUsers);
router.post("/login", jwtController.loginUser);
module.exports = router;
