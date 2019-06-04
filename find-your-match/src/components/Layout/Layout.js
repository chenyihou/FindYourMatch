import React, { useEffect, useState } from "react";
import { LayoutHeader } from "./LayoutHead/LayoutHeader";
import { LayoutContent } from "./LayoutContent";

export function MyLayout(props) {
  const [porp, setProp] = useState(0);
  return (
    <div>
      <LayoutHeader />
      <LayoutContent />
    </div>
  );
}
