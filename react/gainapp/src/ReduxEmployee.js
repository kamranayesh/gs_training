import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeApp/EmployeeForm";
import EmployeeList from "./EmployeeApp/EmployeesList";
import { useDispatch, useSelector } from "react-redux";
import "./EmployeeApp/EmployeeApp.css";
import {
  clearEmployee as clearEmployeeAction,
  addEmployee as addEmployeeAction,
  deleteEmployee as deleteEmployeeAction,
  fetchAction,
} from "./actions/employeeactions";

const ReduxEmployee = () => {
  const dispatch = useDispatch();

  const [employees] = useSelector((state) => {
    // console.log(state.todos);
    return [state.employee];
  });
  useEffect(() => {
    dispatch(fetchAction());
  }, []);

  const addEmployee = (event) => {
    event.preventDefault();
    const formObj = event.target;
    let employeeObj = {
      name: formObj.name.value,
      age: formObj.age.value,
      city: formObj.city.value,
      salary: formObj.salary.value,
    };
    dispatch(addEmployeeAction(employeeObj));
    dispatch(fetchAction());
  };
  const deleteEmployee = (indexTodelete) => {
    dispatch(deleteEmployeeAction(indexTodelete));
    dispatch(fetchAction());
  };
  const clearEmployee = () => {
    dispatch(clearEmployeeAction());
    dispatch(fetchAction());
  };

  return (
    <div id="employee-list">
      <h1 id="empH">Employee App</h1>
      {/* <Button variant="contained" onClick={getData}>
        Get Data
      </Button> */}
      <EmployeeForm addEmployee={addEmployee} />
      <hr />
      <div id="employeelist">
        <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
      </div>
      <br />
      <Button className="clear" variant="contained" onClick={clearEmployee}>
        Clear All
      </Button>
    </div>
  );
};

export default ReduxEmployee;
