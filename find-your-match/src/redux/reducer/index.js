import {
  loginReducer
} from "./login";
import {
  combineReducers
} from "redux";
import {
  ladderReducer
} from "./ladder";


import {
  firestoreReducer
} from 'redux-firestore';
import {
  firebaseReducer
} from 'react-redux-firebase'

export const rootReducer = combineReducers({
  profile: loginReducer,
  ladder: ladderReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});