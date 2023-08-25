import Button from "@mui/material/Button";
const Todos = ({ val, deleteTodo, index }) => {
  return (
    <div>
      <p>{val.name}</p>
      <p>{val.status}</p>
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
};

export default Todos;
