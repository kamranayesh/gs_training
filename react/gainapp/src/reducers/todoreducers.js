const initialState = [
  { name: "have coffee", status: "incomplete" },
  { name: "finish PDF", status: "incomplete" },
];

const TodoReducer = (state = initialState, action) => {
  //   console.log(state, action);
  // if (action.type === "add") {
  //   let newTodo = action.payload;
  //   let newState = [...state, newTodo];
  //   return newState;
  // }
  // if (action.type === "clear") {
  //   let newState = [];
  //   return newState;
  // }

  // if (action.type === "deleteTodo") {
  //   let indexTodelete = action.payload;
  //   console.log(indexTodelete);
  //   // let newState = state.filter((val, index) => index != indexTodelete);
  //   let newState = state.filter((val, index) => {
  //     if (index === indexTodelete) {
  //       return false;
  //     }
  //     return true;
  //   });
  //   console.log("newstate", newState);

  //   return newState;
  // }

  // if (action.type === "fetch_todos") {
  //   let newTodos = action.payload;
  //   let newState = newTodos;
  //   return newState;
  // }
  return state;
};

export default TodoReducer;
//     return state.filter((v, i) => i != indexTodelete);
