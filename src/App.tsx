import React from "react";
import Homepage from "./views/Homepage";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
