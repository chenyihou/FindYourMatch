import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCDbGtyH8C2-YvMALK3V-hwNRnTIbuUDrY",
  authDomain: "mytest-51680.firebaseapp.com",
  databaseURL: "https://mytest-51680.firebaseio.com",
  projectId: "mytest-51680",
  storageBucket: "mytest-51680.appspot.com",
  messagingSenderId: "322387539214",
  appId: "1:322387539214:web:522259a9feaf0083"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
