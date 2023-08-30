import { createStore, applyMiddleware } from "redux";
import CityNewsReducer from "../reducer/cityNewsReducer";
import thunk from "redux-thunk";

let Store = createStore(CityNewsReducer, applyMiddleware(thunk));
export default Store;
