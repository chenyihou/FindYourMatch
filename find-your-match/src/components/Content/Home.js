import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;
const Box = () => <div style={{ height: "1000px" }}>sdf</div>;
export function Home(props) {
  useEffect(() => {
    // let c = document.querySelector("#card1");
    // c.onscroll = e => console.log(c.scrollHeight);
    // console.log(c);
  });
  return (
    <main>
      <Box />
      <Box />
      <Box />
      <Box />
      {/* <Card
        id="card1"
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="http://pluspng.com/img-png/pingpong-hd-png-ping-pong-download-png-png-image-2401.png"
          />
        }
      >
        <Meta title="Ping pong" description="Find one" />
      </Card>
      <Card
        id="card1"
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="http://pluspng.com/img-png/pingpong-hd-png-ping-pong-download-png-png-image-2401.png"
          />
        }
      >
        <Meta title="Ping pong" description="Find one" />
      </Card>
      <Card
        id="card1"
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="http://pluspng.com/img-png/pingpong-hd-png-ping-pong-download-png-png-image-2401.png"
          />
        }
      >
        <Meta title="Ping pong" description="Find one" />
      </Card> */}
    </main>
  );
}
