import React, { useEffect, useState } from "react";
import "./LayoutHeader.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../../redux/actions/loginAction";
import { HeadBar } from "./HeadBar";

function _LayoutHeader({ username, isLogin, location }) {
  return (
    <>
      <HeadBar username={username} isLogin={isLogin} />
    </>
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
