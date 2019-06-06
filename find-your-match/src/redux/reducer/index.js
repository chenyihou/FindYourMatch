import { loginReducer } from "./login";
import { combineReducers } from "redux";
import { ladderReducer } from "./ladder";

export const rootReducer = combineReducers({
  profile: loginReducer,
  ladder: ladderReducer
});
