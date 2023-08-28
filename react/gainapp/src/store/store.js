import { combineReducers, createStore, applyMiddleware } from "redux";
import CountReducer from "../reducers/CountReducer";
import TodoReducer from "../reducers/todoreducers";
import EmployeeReducer from "../reducers/EmployeeReducers";
import thunk from "redux-thunk";
const combinedReducer = combineReducers({
  counter: CountReducer,
  todos: TodoReducer,
  employee: EmployeeReducer,
});

let Store = createStore(combinedReducer, applyMiddleware(thunk));
export default Store;
