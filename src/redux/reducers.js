import { combineReducers } from "redux";
import counterReducer from "../redux/actions/counter";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
