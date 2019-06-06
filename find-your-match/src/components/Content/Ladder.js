import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { retriveLadder } from "../../redux/actions/retriveData";
import { LadderChart } from "./LadderChar";
const { Meta } = Card;
const Box = () => <div style={{ height: "1000px" }}>ladder</div>;
export function _Ladder({ retriveLadder, ladder }) {
  useEffect(() => {
    // let c = document.querySelector("#card1");
    // c.onscroll = e => console.log(c.scrollHeight);
    retriveLadder();
    console.log(ladder, retriveLadder);
  });
  return <LadderChart />;
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ retriveLadder }, dispatch);

export let Ladder = connect(
  null,
  mapDispatchToProps
)(_Ladder);
