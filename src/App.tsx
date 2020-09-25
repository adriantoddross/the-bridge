import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import AboutPage from "./views/About";
import PageNotFound from "./views/404Page";
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

        <Route path="/org/:name">
          <h1>Hello World!</h1>
        </Route>

        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
