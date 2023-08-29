import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./Todo.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  let [todos, setTodos] = useState([
    { name: "Sleep early", status: "complete" },
    { name: "Finish Assignment", status: "complete" },
    { name: "Wake up early", status: "complete" },
  ]);
  useEffect(() => {
    getData();
    const destructorFunction = () => {
      alert("do you want to leave page for sure?");
    };
    return destructorFunction;
  }, []);
  useEffect(() => {
    console.log("useEffect is fired!");
  }, [todos]);

  const addTodo = (event) => {
    event.preventDefault();
    const formObj = event.target;
    const inputObj = formObj.todo;
    const inputtext = inputObj.value;
    let todoObj = { name: inputtext, status: formObj.status.value };
    // let newTodos = [...todos, todoObj];
    // setTodos(newTodos);
    axios.post("/todos", todoObj).then((response) => {
      console.log(response);
    });
    getData();
  };
  const deleteTodo = (indexTodelete) => {
    // let newTodos = todos.filter((val, index) => {
    //   if (index == indexTodelete) {
    //     return false;
    //   }
    //   return true;
    // });
    // setTodos(newTodos);
    axios
      .delete(`/todos/${indexTodelete}`)
      .then((response) => console.log(response));
    getData();
  };
  const clearTodo = () => {
    let newTodos = [];
    setTodos(newTodos);
  };

  function handleCheckBox(event) {
    const pdiv = event.target.parentNode;
    const delbtn = pdiv.getElementsByClassName("delete-btn")[0];
    const para = pdiv.getElementsByTagName("p")[0];
    // console.log(delbtn)
    delbtn.disabled = event.target.checked;
    if (event.target.checked) {
      para.classList.add("completed");
    } else {
      para.classList.remove("completed");
    }
  }

  const getData = () => {
    axios.get("/todos").then(function (response) {
      setTodos(response.data);
    });
  };

  return (
    <div id="todo-list">
      <h1>TODO</h1>
      {/* <Button variant="contained" onClick={getData}>
        Get Data
      </Button> */}
      <TodoForm addTodo={addTodo} />
      <div id="todolist">
        <TodoList
          handleCheckBox={handleCheckBox}
          todos={todos}
          deleteTodo={deleteTodo}
        />
      </div>
      <br />
      <Button className="clear" variant="contained" onClick={clearTodo}>
        Clear All
      </Button>
    </div>
  );
};

export default Todo;
