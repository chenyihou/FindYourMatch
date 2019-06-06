import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { MyLayout } from "./components/Layout/Layout";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <MyLayout />
      </Router>
    </Provider>
  );
}

export default App;
