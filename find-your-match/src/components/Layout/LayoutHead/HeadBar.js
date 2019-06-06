import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import { HeadMenu } from "./HeadMenu";
import "./LayoutHeader.css";
import { showLoginModal } from "../../Modal/LoginModal";

export function HeadBar(props) {
  return (
    <header id="head-bar">
      <div id="logo">logo</div>
      <div id="head-middle">
        <HeadMenu />
      </div>
      <div id="head-right">
        <div>search bar</div>
        {props.isLogin ? (
          <>
            <div className="login">
              <Button ghost onClick={props.logout}>
                log out
              </Button>
            </div>
            {props.username}
          </>
        ) : (
          <>
            <div>
              <Button ghost onClick={showLoginModal}>
                log in
              </Button>
            </div>
            <div>
              <Button ghost>register</Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
