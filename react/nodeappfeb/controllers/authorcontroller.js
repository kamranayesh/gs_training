const Author = require("../models/author");
const { body, validationResult } = require("express-validator");
exports.createAuthor = [
	body("first_name")
		? body("first_name")
				.trim()
				.escape()
				.isLength({ min: 5, max: 70 })
				.withMessage("first_name should be between 5 and 20")
		: "",

	body("last_name")
		.trim()
		.escape()
		.isLength({ min: 5, max: 20 })
		.withMessage("last_name to be between 5 and 20 characters")
		.isAlphanumeric()
		.withMessage("last_name should be alpha numberic"),
	(request, response) => {
		const errors = validationResult(request);
		console.log(errors);
		if (!errors.isEmpty()) {
			response.json({
				status: 0,
				data: "validation failed",
				debug_data: errors,
			});
		} else {
			let { first_name, last_name, dob, dod } = request.body;
			let authorOb = new Author({
				first_name,
				last_name,
				dob,
				dod,
			});
			authorOb.save((err) => {
				if (err) {
					response.json(err);
				} else {
					response.json({
						status: 1,
						data: { msg: "Author created successfully" },
					});
				}
			});
		}
	},
];

exports.listAuthors = (request, response) => {
	Author.find(function (err, authors_list) {
		if (err) {
			response.json(err);
		} else {
			response.json({ status: 1, data: authors_list });
		}
	});
};
