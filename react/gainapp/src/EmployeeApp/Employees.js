import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./EmployeeApp.css";

const Employees = ({ val, deleteEmployee, index }) => {
  return (
    <div>
      <Card
        className="card"
        variant="outlined"
        sx={{ fontSize: 14, background: "#037ef9", color: "white" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            ID: {val.employeeId}
          </Typography>
          <Typography variant="h5" component="div">
            {val.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>Age : {val.age}</Typography>
          <br />
          <Typography variant="body2">
            {val.city}
            <br />
            Salary : {val.salary}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            aria-label="delete"
            size="large"
            color="error"
            onClick={() => {
              deleteEmployee(index);
            }}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Employees;
