exports.indexController = function (request, response) {
	response.send("you came to products route");
};
exports.tshirtController = function (request, response) {
	console.log("tshirtController fucntion ran");
	response.send(
		`The shirt will cost u Rs 4000 and its of zara & price is ${request.params.price}`
	);
};
