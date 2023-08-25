import { createStore } from "redux";
import CountReducer from "../reducers/CountReducer";

let Store = createStore(CountReducer);
export default Store;
