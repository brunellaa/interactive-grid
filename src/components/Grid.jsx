import React, { Component } from "react";
import styled from "styled-components";
import GridTile from "./GridTile";

export default class Grid extends Component {
  render() {
    const { gridData, theme } = this.props.GridSettings;

    const Wrapper = styled.div`
      position: absolute;
      width: ${theme.tileDimensions * theme.numberOfRows + "px"};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;

    const FloorContainer = styled.div`
      font-size: 0;
      transform-style: preserve-3d;
      transform: rotateX(55deg) rotateZ(45deg);
      .tile-row {
        transform-style: preserve-3d;
      }
    `;

    return (
      <Wrapper gridData={gridData}>
        <FloorContainer colorTheme={theme}>
          {gridData.map((row, i) => (
            <div className={`tile-row row-${i}`} key={`row-${i}`}>
              {row.map((tile) => (
                <GridTile tile={tile} theme={theme} key={tile.id} />
              ))}
            </div>
          ))}
        </FloorContainer>
      </Wrapper>
    );
  }
}
