import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../theme";
import OrgPage from "./OrgPage";

export default () => (
  <ThemeProvider theme={theme}>
    <OrgPage />
  </ThemeProvider>
);
