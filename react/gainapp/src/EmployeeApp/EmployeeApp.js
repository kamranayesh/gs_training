import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Employees from "./Employees";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeesList";
import "./EmployeeApp.css";
const EmployeeApp = () => {
  let [employees, setEmployees] = useState([
    {
      name: "Kamran",
      age: 10,
      salary: 100000,
      city: " Bhagalpur",
      employeeId: 5,
    },
    {
      name: "Ayesh",
      age: 10,
      salary: 100000,
      city: " Bhagalpur",
      employeeId: 5,
    },
  ]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log("useEffect is fired!");
  }, [employees]);

  const addEmployee = (event) => {
    event.preventDefault();
    const formObj = event.target;
    let employeeObj = {
      name: formObj.name.value,
      age: formObj.age.value,
      city: formObj.city.value,
      salary: formObj.salary.value,
    };
    axios.post("/employee", employeeObj).then((response) => {
      console.log(response);
    });
    getData();
  };
  const deleteEmployee = (indexTodelete) => {
    axios
      .delete(`/employee/${indexTodelete}`)
      .then((response) => console.log(response));
    getData();
  };
  const clearEmployee = () => {
    // let newEmployee = [];
    // setEmployees(newEmployee);
    axios.delete(`/deleteemployee`).then((response) => console.log(response));
    getData();
  };

  const getData = () => {
    axios.get("/employee").then(function (response) {
      setEmployees(response.data);
    });
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

export default EmployeeApp;
