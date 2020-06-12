import React from "react";
import GridRow from "./GridRow";

export default function Grid() {
  return (
    <div className="test">
      <div className="wrapper">
        <div className="floor">
          <GridRow />
          <GridRow />
          <GridRow />
          <GridRow />
          <GridRow />
        </div>
      </div>
    </div>
  );
}
