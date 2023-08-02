import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Box } from "@mui/material";
import ContextProvider from './context/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </ContextProvider>
  );
}

export default App;