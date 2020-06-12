import React from "react";
import GridTile from "./GridTile";

export default function GridRow() {
  const GridTile = styled.section`
  background-color:; blue
`;
  return (
    <div className="row">
      <GridTile />
      <GridTile />
      <GridTile />
      <GridTile />
      <GridTile />
    </div>
  );
}
