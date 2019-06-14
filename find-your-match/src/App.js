import React, {
  useState,
  useEffect
} from "react";
import "antd/dist/antd.css";
import {
  MyLayout
} from "./components/Layout/Layout";
import {
  Provider
} from "react-redux";
import {
  BrowserRouter as Router
} from "react-router-dom";
import store, {
  rrfProps
} from "./redux/store";
import {
  ReactReduxFirebaseProvider
} from "react-redux-firebase";

function App(props) {
  return ( < Provider store = {
      store
    } > < ReactReduxFirebaseProvider {
      ...rrfProps
    } > < Router > < MyLayout / > < /Router> < /ReactReduxFirebaseProvider > < /Provider>);
  }

  export default App;