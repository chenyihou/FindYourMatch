import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import { HeadMenu } from "./HeadMenu";
import "./LayoutHeader.css";
import { showLoginModal } from "../../Modal/LoginModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../../redux/actions/loginAction";
function _LayoutHeader(props) {
  useEffect(() => {
    console.log(props);
  });
  return (
    <header id="layout-header-container">
      <Row type="flex" justify="space-around" align="middle">
        <Col>Find Your Match</Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <HeadMenu />
        </Col>
        <Col span={2}>search bar</Col>
        {props.isLogin ? (
          <>
            <Col span={2}>
              <Button ghost onClick={props.logout}>
                log out
              </Button>
            </Col>

            {props.username}
          </>
        ) : (
          <>
            <Col span={2}>
              <Button ghost onClick={showLoginModal}>
                log in
              </Button>
            </Col>
            <Col span={2}>
              <Button ghost>register</Button>
            </Col>
          </>
        )}
      </Row>
    </header>
  );
}

const mapStateToProps = state => ({
  isLogin: state.profile.isLogin,
  username: state.profile.username
});

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export const LayoutHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LayoutHeader);
