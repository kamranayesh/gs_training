const initialState = { count: 2 };

const CountReducer = (state = initialState, action) => {
  if (action.type === "increase") {
    let newState = { ...state, count: state.count + action.payload };
    return newState;
  }
  if (action.type === "decrease") {
    let newState = { ...state, count: state.count - 1 };
    return newState;
  }
  if (action.type === "reset") {
    let newState = { ...state, count: 0 };
    return newState;
  }
  return state;
};

export default CountReducer;
