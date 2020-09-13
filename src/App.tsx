import React from "react";
import Homepage from "./views/Homepage";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lato", "Garamond", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "#E2F4EC",
      main: "#10844E",
      dark: "#004B28",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
