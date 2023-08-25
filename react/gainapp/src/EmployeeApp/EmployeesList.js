import Employees from "./Employees";
const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <>
      {employees.map((val, index) => {
        return (
          <Employees index={index} val={val} deleteEmployee={deleteEmployee} />
        );
      })}
    </>
  );
};

export default EmployeeList;
