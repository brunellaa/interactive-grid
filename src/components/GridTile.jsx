import React from "react";
import styled from "styled-components";

const theme = {
  // ** RETRO NIGHT
  tileDimensions: 100,
  selectedTileHeight: 20,
  tileBaseColor: "#231e94",
  tileBorderColor: "#13e8e9",
  tileSideLeft: "#120e70",
  tileSideRight: "#03004b",
};

const TileContainer = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  font-size: 11pt;
  color: #ccc;
  display: inline-block;
  background: ${theme.tileBaseColor};
  width: ${theme.tileDimensions + "px"};
  height: ${theme.tileDimensions + "px"};
  box-shadow: 0 0 0 0.1em hsla(0, 0%, 0%, 0.2);
  border: solid 1px ${theme.tileBorderColor};
  line-height: 48px;
  text-align: center;
  position: relative;
  vertical-align: top;
  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &::before {
    /*right side*/
    top: ${theme.selectedTileHeight / 2 + "px"};
    right: ${-1 - theme.selectedTileHeight + "px"};
    /**/
    width: ${theme.selectedTileHeight + "px"};
    height: 100%;
    background: ${theme.tileSideRight};
    transform: rotate(0deg) skewY(45deg);
  }
  &::after {
    /*left side*/
    bottom: ${-1 - theme.selectedTileHeight + "px"};
    left: ${theme.selectedTileHeight / 2 + "px"};
    /**/
    height: ${theme.selectedTileHeight + "px"};
    width: 100%;
    background: ${theme.tileSideLeft};
    transform: rotate(0deg) skewX(45deg);
  }
  &:hover {
    transition: 0.5s;
    transform: translate(
      ${0 - theme.selectedTileHeight + "px"},
      ${0 - theme.selectedTileHeight + "px"}
    );
  }
`;

export default function Tile() {
  console.log("hey");

  return (
    <TileContainer>
      {/* <img className="tile-image" src={CityTile} alt="tile" />
      <div className="tile-floor" /> */}
    </TileContainer>
  );
}
