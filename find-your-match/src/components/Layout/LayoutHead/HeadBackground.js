import React from "react";
import { Button } from "antd";

export function HeadBackground(props) {
    return (
        <div id="background-container">
            <div id="head-background">
                <Button onClick={(e) => console.log("hhi")}>match now </Button>
                <Button> tradition</Button>{" "}
            </div>
        </div>
    );
}
