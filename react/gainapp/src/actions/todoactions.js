import axios from "axios";
const add = (todo) => {
  const addTodo = (dispatch) => {
    axios.post("/todos", todo).then((res) => {
      console.log("added todo");
    });
  };
  return addTodo;
};
const deleteTodo = (indexTodelete) => {
  const deleteT = (dispatch) => {
    axios
      .delete(`/todos/${indexTodelete}`)
      .then((response) => console.log(response));
  };
  return deleteT;
};
// ({
//   type: "deleteTodo",
//   payload: indexTodelete,
// });

const clearTodo = () => ({
  type: "clear",
});

const fetchAction = () => {
  const fetchFunc = (dispatch) => {
    axios
      .get("/todos")
      .then((res) => {
        let todos = res.data;
        // console.log(todos);
        dispatch({ type: "fetch_todos", payload: todos });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return fetchFunc;
};

export { add, deleteTodo, clearTodo, fetchAction };
