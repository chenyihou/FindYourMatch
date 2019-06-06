import React from "react";
import { withRouter } from "react-router-dom";
export function _HeadBackground(props) {
  console.log(props.location, props.location.pathname === "/");
  return props.location.pathname === "/" && <div id="head-background"> </div>;
}

export let HeadBackground = withRouter(_HeadBackground);
