import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./Todo.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Todo = () => {
  let [todos, setTodos] = useState([
    { name: "Sleep early", status: "complete" },
    { name: "Finish Assignment", status: "complete" },
    { name: "Wake up early", status: "complete" },
  ]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log("useEffect is fired!");
  }, [todos]);
  const addTodo = (event) => {
    event.preventDefault();
    const formObj = event.target;
    const inputObj = formObj.todo;
    const inputtext = inputObj.value;
    let newTodos = [...todos, inputtext];
    setTodos(newTodos);
  };
  const deleteTodo = (indexTodelete) => {
    let newTodos = todos.filter((val, index) => {
      if (index == indexTodelete) {
        return false;
      }
      return true;
    });
    setTodos(newTodos);
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
    axios.get("http://localhost:3001/todos").then(function (response) {
      setTodos(response.data);
    });
  };
  return (
    <div id="todo-list">
      <h1>TODO</h1>
      {/* <Button variant="contained" onClick={getData}>
        Get Data
      </Button> */}
      <form onSubmit={addTodo}>
        <TextField
          label="Todo"
          variant="standard"
          type="text"
          id="todo"
          name="todo"
          placeholder="Enter Todo"
        />
        <Button variant="contained" class="add" type="submit">
          Add
        </Button>
      </form>
      <div id="todolist">
        {todos.map((val, index) => {
          return (
            <div>
              <input type="checkbox" id="checkB" onClick={handleCheckBox} />
              {/* {val.status == "complete" ? (
                
              ) : (
                
              )} */}
              <p>{val.name}</p>
              <Button
                variant="contained"
                className="delete-btn"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
      <br />
      <Button className="clear" variant="contained" onClick={clearTodo}>
        Clear All
      </Button>
    </div>
  );
};

export default Todo;
