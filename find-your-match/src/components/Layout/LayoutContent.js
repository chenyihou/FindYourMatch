import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;
export function LayoutContent(props) {
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col>
        <Card
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
      </Col>
    </Row>
  );
}
