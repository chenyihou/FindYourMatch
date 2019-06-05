import React, { useEffect, useState } from "react";
import { LayoutHeader } from "./LayoutHead/LayoutHeader";
import { LayoutContent } from "./LayoutContent";
import { LoginModal } from "../Modal/LoginModal";

export function MyLayout(props) {
  const [porp, setProp] = useState(0);
  return (
    <div>
      <LoginModal />
      <LayoutHeader />
      <LayoutContent />
    </div>
  );
}
