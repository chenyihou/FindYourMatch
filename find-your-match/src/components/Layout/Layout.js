import React, { useEffect, useState } from "react";
import { LayoutHeader } from "./LayoutHead/LayoutHeader";
import { LayoutContent } from "../Content/LayoutContent";
import { LoginModal } from "../Modal/LoginModal";
import "./Layout.css";
import { withRouter } from "react-router-dom";
import { HeadBackground } from "./LayoutHead/HeadBackground";

export function _MyLayout({ location }) {
  const [headVisibility, setHeadVisibility] = useState(true);
  useEffect(() => {
    function handleScroll(e) {
      if (window.scrollY > h) {
        header.classList.add("hide-headbar");
      } else {
        header.classList.remove("hide-headbar");
      }
    }
    function handlemousemove(e) {
      if (window.scrollY > h) {
        if (e.clientY < header.clientHeight) {
          header.classList.remove("hide-headbar");
          header.classList.add("headbar-background");
        } else {
          header.classList.add("hide-headbar");
          header.classList.remove("headbar-background");
        }
      }
    }
    window.addEventListener("mousemove", handlemousemove);
    window.addEventListener("scroll", handleScroll);
    const header = document.querySelector("header");
    const background = document.querySelector("#head-background");
    let h = background ? background.clientHeight : header.clientHeight;
    document.querySelector("main").style.marginTop = h + "px";
  });
  return (
    <div id="container">
      {location.pathname === "/" && <HeadBackground />}

      <LoginModal />
      <LayoutHeader />
      <LayoutContent />
    </div>
  );
}

export const MyLayout = withRouter(_MyLayout);
