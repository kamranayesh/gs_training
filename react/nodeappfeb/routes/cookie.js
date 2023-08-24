var express = require("express");
var router = express.Router();

router.get("/setcookie/:name/:value", function (req, res) {
	res.cookie(req.params.name, req.params.value);
	res.send(
		`cookie with name as ${req.params.name} and value as ${req.params.value} is set`
	);
});

router.get("/setcookiewithtime/:name/:value/:time", function (req, res) {
	const valueInMIlliseconds = req.params.time * 60 * 1000;
	res.cookie(req.params.name, req.params.value, {
		maxAge: valueInMIlliseconds,
	});
	res.send(
		`cookie with name as ${req.params.name} and value as ${req.params.value} is set`
	);
});
router.get("/clearcookie/:name", function (req, res) {
	res.clearCookie(req.params.name);
	res.send(`cookie with name ${req.params.name} is cleared`);
});

module.exports = router;
