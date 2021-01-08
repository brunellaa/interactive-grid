import React, { useState } from "react";
import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";

const TileContainer = styled.div`
  transform-style: preserve-3d;
  pointer-events: none;
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: ${(props) => props.settings.theme.tileDimensions + "px"};
  height: ${(props) => props.settings.theme.tileDimensions + "px"};
  .tile-image {
    display: ${(props) =>
      props.settings.theme.hideImages ? "none" : "initial"};
    filter: ${(props) => props.settings.theme.imageFilter};
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateZ(-45deg) rotateX(-55deg);
    transform-origin: 0px 0px
      ${(props) => props.settings.theme.tileDimensions * 4.21 + "px"};
    width: ${(props) => props.settings.theme.tileDimensions * 1.4 + "px"};
    bottom: ${(props) => -props.settings.theme.tileDimensions * 4.24 + "px"};
    right: ${(props) => -props.settings.theme.tileDimensions * 2.46 + "px"};
  }
  .tile-floor {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    pointer-events: ${(props) =>
      props.settings.tile.disabled ? "none" : "initial"};
    background: ${(props) => props.settings.theme.tileBaseColor};
    border: solid 1px ${(props) => props.settings.theme.tileBorderColor};
    &:hover + .tile-image {
      background: ${(props) => props.settings.theme.imagehighlights};
      filter: ${(props) => props.settings.theme.imageHoverFilter};
    }
    &:hover ~ .tile-tooltip {
      visibility: visible;
    }
  }
  .tile-tooltip {
    transform-style: preserve-3d;
    transform: translateZ(225px) rotateZ(-45deg) rotateX(-55deg);
    width: 100%;
    margin-left: 40%;
    text-align: center;
    pointer-events: none;
    position: absolute;
    padding: 10px;
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    color: #fff;
    top: 100px;
    z-index: 999999;
    font-size: ${(props) => props.settings.theme.tooltip.textSize};
    h1 {
      color: ${(props) => props.settings.theme.tooltip.titleColor};
      font-size: ${(props) => props.settings.theme.tooltip.titleSize};
    }
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    transform-style: preserve-3d;
  }
  &::before {
    /*right side*/
    height: 100%;
    transform: rotate(0deg) skewY(45deg);
    top: ${(props) => props.settings.theme.selectedTileHeight / 2 + "px"};
    right: ${(props) => -1 - props.settings.theme.selectedTileHeight + "px"};
    width: ${(props) => props.settings.theme.selectedTileHeight + "px"};
    background: ${(props) => props.settings.theme.tileSideRight};
  }
  &::after {
    /*left side*/
    width: 100%;
    transform: rotate(0deg) skewX(45deg);
    left: ${(props) => props.settings.theme.selectedTileHeight / 2 + "px"};
    bottom: ${(props) => -1 - props.settings.theme.selectedTileHeight + "px"};
    height: ${(props) => props.settings.theme.selectedTileHeight + "px"};
    background: ${(props) => props.settings.theme.tileSideLeft};
  }
  &:hover {
    &::before,
    &::after {
      opacity: 0.7;
      transition: 1s;
    }
    transition: 0.5s;
    transform: translate(
      ${(props) => 0 - props.settings.theme.selectedTileHeight + "px"},
      ${(props) => 0 - props.settings.theme.selectedTileHeight + "px"}
    );
  }
`;

export default function Tile(props) {
  const {
    tile,
    tile: { modal: modalData, link },
  } = props;
  const [isModalOpen, setModal] = useState(false);

  const handleTileClick = () => {
    if (link && link !== "") {
      window.open(link);
    } else {
      setModal(true);
    }
  };

  return (
    <TileContainer settings={props}>
      <div className="tile-floor" onClick={handleTileClick} />
      <img
        className="tile-image"
        src={require(`../assets/${tile.image}.png`)}
        alt="tile"
      />
      <div className="tile-tooltip">
        <h1>{props.tile.title}</h1>
        <p>{props.tile.description}</p>
      </div>
      {modalData && isModalOpen && (
        <ModalWrapper
          isModalOpen={isModalOpen}
          setModal={setModal}
          modalData={modalData}
        />
      )}
    </TileContainer>
  );
}
