import { makeUnionReducer } from "../../helper/reducerHelper";
import { actionTypes } from "../actions/actionTypes";

let handlers = {
  [actionTypes.RETRIVE_LADDER_SUCCEED]: ({ username }) => ({ username })
};

let initState = {
  username: "defalut"
};

export let ladderReducer = makeUnionReducer(initState, handlers);
