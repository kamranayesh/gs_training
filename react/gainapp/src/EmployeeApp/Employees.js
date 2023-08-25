import Button from "@mui/material/Button";
import "./EmployeeApp.css";
const Employees = ({ val, deleteEmployee, index }) => {
  return (
    <div>
      <label id="emp">{val.employeeId}</label>
      <label id="emp">{val.name}</label>
      <label id="emp">{val.age}</label>
      <label id="emp">{val.city}</label>
      <label id="emp">{val.salary}</label>

      <Button
        variant="contained"
        className="delete-btn"
        onClick={() => {
          deleteEmployee(index);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Employees;
