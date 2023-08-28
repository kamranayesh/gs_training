import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearTodo as clearTodoaction,
  deleteTodo as deleteTodoaction,
  add,
  fetchAction,
} from "./actions/todoactions";
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";
import { useEffect } from "react";

const ReduxTodo = () => {
  const dispatch = useDispatch();

  const [todos] = useSelector((state) => {
    // console.log(state.todos);
    return [state.todos];
  });
  useEffect(() => {
    dispatch(fetchAction());
  }, []);
  const addTodo = (event) => {
    event.preventDefault();
    const formObj = event.target;
    const inputObj = formObj.todo;
    const inputtext = inputObj.value;
    let todoObj = { name: inputtext, status: formObj.status.value };
    // dispatch({ type: "increase" });
    dispatch(add(todoObj));
    dispatch(fetchAction());
  };

  const deleteTodos = (indexTodelete) => {
    // dispatch({ type: "reset" });
    dispatch(deleteTodoaction(indexTodelete));
    dispatch(fetchAction());
  };

  const clearTodo = () => {
    dispatch(clearTodoaction());
  };

  return (
    <div id="todo-list">
      <h1>TODO</h1>
      {/* <Button variant="contained" onClick={getData}>
        Get Data
      </Button> */}
      <TodoForm addTodo={addTodo} />
      <div id="todolist">
        <TodoList todos={todos} deleteTodo={deleteTodos} />
      </div>
      <br />
      <Button className="clear" variant="contained" onClick={clearTodo}>
        Clear All
      </Button>
    </div>
  );
};

export default ReduxTodo;
