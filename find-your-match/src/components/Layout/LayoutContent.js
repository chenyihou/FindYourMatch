import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
export function LayoutContent(props) {
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col>this is content</Col>
    </Row>
  );
}
