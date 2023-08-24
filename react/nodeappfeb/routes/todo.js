var express = require("express");
var router = express.Router();
const path = require("path");
const TodoController = require("../controllers/TodoController");
let todos = [
	{ name: "read book", status: "complete" },
	{ name: "go to gym", status: "incomplete" },
];
router.get("/todos", function (request, response) {
	response.json(todos);
});
//:id means id can have any value. so it is variable.
router.get("/todos/:id", function (request, response) {
	let id = request.params.id;
	response.json(todos[id]);
});

router.post("/", TodoController.createTodo);
router.get("/", TodoController.getTodos);
/*router.post("/todos", function (request, response) {
	let { name, status } = request.body;
	let todosOb = { name: name, status: status };
	todos.push(todosOb);
	response.json({ status: 1, msg: "operation to add todo is complete" });
});*/
router.delete("/:id", TodoController.deleteTodo);

router.put("/:id", TodoController.editTodo);

router.get("/todoform", function (request, response) {
	let completePath = path.join(__dirname + "/../todoform.html");
	response.sendFile(completePath);
});

module.exports = router;
