import Employees from "./Employees";
import "./EmployeeApp.css";
const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <div className="employee">
      {employees.map((val, index) => {
        return (
          <Employees index={index} val={val} deleteEmployee={deleteEmployee} />
        );
      })}
    </div>
  );
};

export default EmployeeList;
