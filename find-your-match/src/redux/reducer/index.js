import { loginReducer } from "./login";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  profile: loginReducer
});
