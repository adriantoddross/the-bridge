import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../theme";
import ContactPage from "./ContactPage";

export default () => (
  <ThemeProvider theme={theme}>
    <ContactPage />
  </ThemeProvider>
);
