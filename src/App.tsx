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
        <ThemeProvider theme={theme}>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/contact">
            <ContactPage />
          </Route>

          <Route path="/org/:name">
            <OrgPage />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
