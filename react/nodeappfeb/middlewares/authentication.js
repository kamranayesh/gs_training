const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
	const token = req.header("token");
	if (!token) {
		res.json({ status: 0, debug_data: "token not sent" });
	}
	const isTokenValid = jwt.verify(token, "secret_string");
	if (isTokenValid) {
		next();
	} else {
		res.json({ status: 1, debug_data: "token invalid" });
	}
};
