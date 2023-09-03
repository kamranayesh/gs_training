const EventEmitter = require("node:events");
const myEmitter = new EventEmitter();
//add listner
myEmitter.on("event", (data) => {
  console.log("an event occurred!", data);
});
//add listner and automatically remove listner from first emit
myEmitter.once("eventOnce", () => {
  console.log("an event once occurred!");
});

//to remove listner : off()
//trigger event

myEmitter.emit("event", 1);
myEmitter.emit("event", [1, 2, 3]);
myEmitter.emit("event", "hello");
myEmitter.emit("eventOnce");
myEmitter.emit("eventOnce");
myEmitter.emit("eventOnce");
myEmitter.emit("event", { name: "Kamran" });
