import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../theme";
import PageNotFound from "./404Page";

export default () => (
  <ThemeProvider theme={theme}>
    <PageNotFound />
  </ThemeProvider>
);
