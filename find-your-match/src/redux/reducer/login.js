import { makeUnionReducer } from "../../helper/reducerHelper";
import { actionTypes } from "../actions/actionTypes";

let handlers = {
  [actionTypes.LOGIN_SUCCEED]: ({ username }) => ({ username, isLogin: true }),
  [actionTypes.LOGOUT]: () => ({ username: "", isLogin: false })
};

let initState = {
  username: "",
  isLogin: false
};

export let loginReducer = makeUnionReducer(initState, handlers);
