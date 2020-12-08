import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import Homepage from "./views/Homepage";
import AboutPage from "./views/About";
import PageNotFound from "./views/404Page";
import OrgPage from "./views/OrgPage";
import ContactPage from "./views/ContactPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ThemeProvider theme={theme}>
            <Homepage />
          </ThemeProvider>
        </Route>

        <Route path="/about">
          <ThemeProvider theme={theme}>
            <AboutPage />
          </ThemeProvider>
        </Route>

        <Route path="/contact">
          <ThemeProvider theme={theme}>
            <ContactPage />
          </ThemeProvider>
        </Route>

        <Route path="/org/:name">
          <ThemeProvider theme={theme}>
            <OrgPage />
          </ThemeProvider>
        </Route>

        <Route path="*">
          <ThemeProvider theme={theme}>
            <PageNotFound />
          </ThemeProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
