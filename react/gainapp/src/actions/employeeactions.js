import axios from "axios";
const addEmployee = (employee) => {
  const addEmp = (dispatch) => {
    axios.post("/employee", employee).then((res) => {
      console.log("added employee");
    });
  };
  return addEmp;
};

const deleteEmployee = (indexTodelete) => {
  const deleteT = (dispatch) => {
    axios
      .delete(`/employee/${indexTodelete}`)
      .then((response) => console.log(response));
  };
  return deleteT;
};

const clearEmployee = (indexTodelete) => {
  const clearEmp = (dispatch) => {
    axios.delete(`/deleteemployee`).then((response) => console.log(response));
  };
  return clearEmp;
};
const fetchAction = () => {
  const fetchFunc = (dispatch) => {
    axios
      .get("/employee")
      .then((res) => {
        let employees = res.data;
        // console.log(todos);
        dispatch({ type: "fetch_todos", payload: employees });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return fetchFunc;
};

export { addEmployee, deleteEmployee, clearEmployee, fetchAction };
