import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const EmployeeForm = ({ addEmployee }) => {
  return (
    <form onSubmit={addEmployee}>
      <TextField
        label="name"
        variant="standard"
        type="text"
        name="name"
        placeholder="Enter Employee name"
      />
      <TextField
        label="age"
        variant="standard"
        type="number"
        name="age"
        placeholder="Enter Age"
      />
      <TextField
        label="city"
        variant="standard"
        type="text"
        name="city"
        placeholder="Enter city"
      />
      <TextField
        label="salary"
        variant="standard"
        type="number"
        name="salary"
        placeholder="Enter salary"
      />

      <Button variant="contained" className="add" type="submit">
        Add
      </Button>
    </form>
  );
};

export default EmployeeForm;
