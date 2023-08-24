const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const authenticationMiddleware = require("../middlewares/authentication");
const createUser = (req, res) => {
	let encryptedPassword = "";
	try {
		//salt is a randpm string to generate the hashed password
		let salt = bcrypt.genSaltSync(10);
		encryptedPassword = bcrypt.hashSync(req.body.password, salt);
		console.log(encryptedPassword);
	} catch (error) {
		console.log(error);
	}
	const userOb = new User({
		name: req.body.name,
		age: req.body.age,
		dob: req.body.dob,
		password: encryptedPassword,
		email: req.body.email,
	});
	userOb.save((err) => {
		if (err) {
			res.json({ status: 0, debug_data: err });
		} else {
			res.json({ status: 1, data: "user created" });
		}
	});
};
const loginUser = async (req, res) => {
	const { email, password } = req.body;

	let userOb = await User.findOne({ email });
	if (!userOb) res.json({ status: 0, debug_data: "Email doesnt exist" });

	const correctPassword = bcrypt.compareSync(password, userOb.password);
	if (!correctPassword)
		res.json({ status: 0, debug_data: "Invalid Credentails" });
	const payLoad = {
		user: {
			email,
		},
	};
	jwt.sign(payLoad, "secret_string", { expiresIn: 1200 }, (err, token) => {
		if (err) res.status(500).json({ status: 0, debug_data: err });
		res.status(200).json({ status: 1, token });
	});
};

const listUsers = [
	authenticationMiddleware,
	function (req, res) {
		console.log(User);
		User.find(function (err, users_list) {
			if (err) {
				console.log(err);
			} else {
				console.log(users_list);
				res.json(users_list);
			}
		});
	},
];

module.exports = { createUser, listUsers, loginUser };
