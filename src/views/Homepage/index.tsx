import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../theme";
import Homepage from "./Homepage";

export default () => (
  <ThemeProvider theme={theme}>
    <Homepage />
  </ThemeProvider>
);
