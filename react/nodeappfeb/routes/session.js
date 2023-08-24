var express = require("express");
var router = express.Router();

router.get("/:isLoggedIn", function (req, res) {
	req.session.isLoggedIn = req.params.isLoggedIn;
	res.send(`session set`);
});
router.get("/user/:username", function (req, res) {
	req.session.userName = req.params.username;
	res.send("username saved in session");
});
router.get("/delete/:name", function (req, res) {
	delete req.session[req.params.name];
	res.send(`session with name as ${req.params.name} is removed`);
});
router.get("/destroy/session", function (req, res) {
	req.session.destroy(function (err) {
		if (err) {
			res.send("unable to destroy session");
		} else {
			res.send("Session destroyed completely");
		}
	});
});
module.exports = router;
