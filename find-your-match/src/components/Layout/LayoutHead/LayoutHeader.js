import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { HeadMenu } from "./HeadMenu";
export function LayoutHeader(props) {
  const [porp, setProp] = useState(0);
  return (
    <>
      <Row type="flex" justify="space-around" align="middle">
        <Col>Find Your Match</Col>
      </Row>
      <Row type="flex" justify="space-around" align="middle">
        <Col>
          <HeadMenu />
        </Col>
      </Row>
    </>
  );
}
