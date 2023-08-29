let express = require("express");
const path = require("path");
const socketIo = require("socket.io");
const http = require("http");

let app = express();
//this line allows us to use body parsing meaning that we can now read the data in body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = http.createServer(app);
//the socket server is created .

const io = socketIo(server, { cors: { origin: "*" } });
let interval;
io.on("connection", (socket) => {
  console.log("new socket connection");
  if (interval) {
    clearInterval();
  }
  interval = setInterval(() => {
    const response = new Date();
    socket.emit("GetTime", response);
  }, 1500);
  socket.on("disconnect", () => {
    console.log("client disconnected");
    clearInterval(interval);
  });
});

let employees = [
  { name: "Smith", age: 24, city: "New York", salary: 20000, employeeId: 1 },
  { name: "James", age: 34, city: "London", salary: 200000, employeeId: 2 },
  { name: "Roy", age: 28, city: "New York", salary: 30000, employeeId: 3 },
];
app.get("/employee", function (request, response) {
  response.json(employees);
});
const getLastEmployeeId = () => {
  return employees.length ? employees[employees.length - 1].employeeId : 0;
};
app.post("/employee", function (request, response) {
  let { name, age, salary, city } = request.body;
  let employeesOb = {
    name,
    age,
    salary,
    city,
    employeeId: getLastEmployeeId() + 1,
  };
  employees.push(employeesOb);
  response.json({ status: 1, msg: "operation to add employee is complete" });
});

app.delete("/employee/:id", function (request, response) {
  console.log("Came in" + request.params.id);
  let newEmployees = employees.filter((val, index) => {
    if (index == request.params.id) return false;
    return true;
  });
  employees = [...newEmployees];
  response.json({ status: 1, msg: "operation delete  is complete" });
});
app.delete("/employee/:id", function (request, response) {
  console.log("Came in" + request.params.id);
  let newEmployees = employees.filter((val, index) => {
    if (index == request.params.id) return false;
    return true;
  });
  employees = [...newEmployees];
  response.json({ status: 1, msg: "operation delete  is complete" });
});
app.delete("/deleteemployee", function (request, response) {
  console.log("Came in" + request.params.id);

  employees = [];
  response.json({
    status: 1,
    msg: "operation to  delete all employees  is complete",
  });
});
server.listen(3001);
console.log(
  "Employee simple api is running on 3005 port!it doesnt need any backend"
);
