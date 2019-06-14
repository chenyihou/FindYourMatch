import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import {
    rootReducer
} from "../reducer";
import {
    middlewares
} from "../middlewares";
import {
    createFirestoreInstance,
    getFirestore
} from 'redux-firestore';
import {
    getFirebase
} from 'react-redux-firebase';
import firebase from '../../firebase'
import thunk from "redux-thunk";



const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({
    getFirebase,
    getFirestore
})))



export const rrfProps = {
    firebase,
    config: {
        userProfile: 'users',
        useFirestoreForProfile: true,
        attachAuthIsReady: true
    },
    dispatch: store.dispatch,
    createFirestoreInstance
}
export default store;