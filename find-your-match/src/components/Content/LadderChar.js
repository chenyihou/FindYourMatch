import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
export function _Ladder({ retriveLadder, ladder }) {
  useEffect(() => {
    // let c = document.querySelector("#card1");
    // c.onscroll = e => console.log(c.scrollHeight);
    // retriveLadder();
    console.log(ladder);
  });
  return <div>ladder</div>;
}
const mapStateToProps = state => ({
  ladder: state
});

export let LadderChart = connect(mapStateToProps)(_Ladder);
