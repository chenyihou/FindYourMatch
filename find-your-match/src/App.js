import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { MyLayout } from "./components/Layout/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
function App(props) {
  return (
    <Provider store={store}>
      <MyLayout />
    </Provider>
  );
}

export default App;
