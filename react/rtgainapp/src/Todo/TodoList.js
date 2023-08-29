import Todos from "./Todos";
const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.map((val, index) => {
        return <Todos index={index} val={val} deleteTodo={deleteTodo} />;
      })}
    </>
  );
};

export default TodoList;
