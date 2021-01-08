import React from "react";
import styled from "styled-components";
import Grid from "./components/Grid";
import GridSettings from "./data/settings-1.json";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${GridSettings.theme.canvasBgColor};
`;

function App() {
  return (
    <AppContainer>
      <Grid GridSettings={GridSettings} />
    </AppContainer>
  );
}

export default App;
