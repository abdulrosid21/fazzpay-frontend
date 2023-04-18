import { combineReducers } from "redux";
import user from "./actions/user";
import dashboard from "./actions/dashboard";
import history from "./actions/history";
import topup from "./actions/topup";
import transfer from "./actions/transfer";

const rootReducer = combineReducers({
  user,
  dashboard,
  history,
  topup,
  transfer,
});

export default rootReducer;
