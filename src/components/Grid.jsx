import React, { Component } from "react";
import styled from "styled-components";
import GridTile from "./GridTile";

export default class Grid extends Component {
  render() {
    const gridOptions = {
      numberOfTiles: 4,
      numberOfRows: 4,
      canvasBgColor:
        "linear-gradient( 190deg, rgba(0, 0, 0, 1) 0%, rgba(59, 9, 121, 1) 50%, rgba(97, 0, 255, 1) 100%)",
      // ** RETRO NIGHT
      tileDimensions: 100,
      selectedTileHeight: 20,
      tileBaseColor: "#231e94",
      tileBorderColor: "#13e8e9",
      tileSideLeft: "#120e70",
      tileSideRight: "#03004b",
    };

    const Wrapper = styled.div`
      margin: 0;
      padding: 0;
      background: ${gridOptions.canvasBgColor};
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;

    const FloorContainer = styled.div`
      transform: rotateX(55deg) rotateZ(45deg);
      transform-style: preserve-3d;
      font-size: 0;
    `;

    return (
      <Wrapper>
        <FloorContainer>
          {Array.apply(null, { length: gridOptions.numberOfRows }).map((r) => (
            <div className="row" key={r}>
              {Array.apply(null, { length: gridOptions.numberOfTiles }).map(
                (t) => (
                  <GridTile theme={gridOptions} key={t} />
                )
              )}
            </div>
          ))}
        </FloorContainer>
      </Wrapper>
    );
  }
}
