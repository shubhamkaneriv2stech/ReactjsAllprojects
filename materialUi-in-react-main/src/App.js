import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./components/Navbar/demo";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container>
        <Demo />
        <Outlet />
      </Grid>
    </StyledEngineProvider>
  );
}

export default App;
