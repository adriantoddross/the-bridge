import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import AboutPage from "./views/About";
import PageNotFound from "./views/404Page";
import OrgPage from "./views/OrgPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <Homepage />
          </>
        </Route>
        <Route path="/about">
          <>
            <AboutPage />
          </>
        </Route>

        <Route path="/org/:name" component={OrgPage} />

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
