const Todo = require("../models/todo");
exports.createTodo = (request, response) => {
	let { name, status } = request.body;
	console.log(typeof status);
	console.log(status);
	status = status == "true";
	console.log(status);
	console.log(typeof status);
	let todoObject = new Todo({ name: name, status: status });
	todoObject.save((err) => {
		if (err) {
			console.log("Error happened in saving todo");
			console.log(err);
			response.json(err);
		} else {
			response.send("todo created successfully");
		}
	});
};
exports.getTodos = (request, response) => {
	Todo.find((err, todoList) => {
		if (err) {
			response.json(err);
		} else {
			response.send(todoList);
		}
	});
};
exports.deleteTodo = (request, response) => {
	Todo.findByIdAndDelete(request.params.id, function (err) {
		if (err) {
			response.json(err);
		} else {
			response.send({
				status: 1,
				data: { msg: `todo with id ${request.params.id} is deleted` },
			});
		}
	});
};

exports.editTodo = (request, response) => {
	const updateOb = request.body;

	Todo.findByIdAndUpdate(request.params.id, updateOb, function (err) {
		if (err) {
			response.json(err);
		} else {
			response.json({
				status: 1,
				data: { msg: `the todo with id ${request.params.id} is udpated` },
			});
		}
	});
};
