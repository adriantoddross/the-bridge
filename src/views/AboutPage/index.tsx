import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../theme";
import AboutPage from "./About";

export default () => (
  <ThemeProvider theme={theme}>
    <AboutPage />
  </ThemeProvider>
);
