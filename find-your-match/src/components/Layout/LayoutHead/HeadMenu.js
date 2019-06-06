import { Menu, Icon, Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
export function HeadMenu(props) {
  return (
    <div id="menu">
      <Link to="">
        <Icon type="home" />
      </Link>
      <Link to="ladder">
        <Icon type="radar-chart" />
      </Link>
      <Link to="history">
        <Icon type="line-chart" />
      </Link>
    </div>
  );
}
