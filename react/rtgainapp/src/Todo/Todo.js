import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect } from "react";
import { add, deleteTodo } from "./todoslice";
const Todo = () => {
  const dispatch = useDispatch();

  const [todos] = useSelector((state) => {
    // console.log(state.todo.todos);
    return [state.todo.todos];
  });
  useEffect(() => {
    // console.log(todos);
  }, [todos]);
  const addTodo = (event) => {
    event.preventDefault();
    const formObj = event.target;
    const inputObj = formObj.todo;
    const inputtext = inputObj.value;
    let todoObj = { name: inputtext, status: formObj.status.value };
    // dispatch({ type: "increase" });
    dispatch(add(todoObj));
    // dispatch(fetchAction());
  };

  const deleteTodos = (indexTodelete) => {
    // dispatch({ type: "reset" });
    dispatch(deleteTodo(indexTodelete));
    // dispatch(fetchAction());
  };

  //   const clearTodo = () => {
  //     dispatch(clearTodoaction());
  //   };

  return (
    <div id="todo-list">
      <h1>TODO</h1>

      <TodoForm addTodo={addTodo} />
      <div id="todolist">
        <TodoList todos={todos} deleteTodo={deleteTodos} />
      </div>
      <br />
      {/* <Button className="clear" variant="contained" onClick={clearTodo}>
        Clear All
      </Button> */}
    </div>
  );
};

export default Todo;
