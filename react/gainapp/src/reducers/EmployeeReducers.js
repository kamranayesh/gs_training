const initialState = [
  { name: "Roy", age: 28, city: "New York", salary: 30000, employeeId: 3 },
];

const EmployeeReducer = (state = initialState, action) => {
  //   console.log(state, action);

  if (action.type === "fetch_todos") {
    let newTodos = action.payload;
    let newState = newTodos;
    return newState;
  }
  return state;
};

export default EmployeeReducer;
//     return state.filter((v, i) => i != indexTodelete);
