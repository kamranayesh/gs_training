var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  /*  res.send(req.session.isLoggedIn);
   */
  res.send({
    isLoggedIn: req.session.isLoggedIn,
    userName: req.session.userName,
  });
  /*res.json(
    `welcome, i can see that you are from ${
      req.cookies.city ? req.cookies.city : "unknown"
    }`
  );*/
});

module.exports = router;
