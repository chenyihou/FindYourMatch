import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducer";
import { middlewares } from "../middlewares";
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
