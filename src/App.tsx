import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import AboutPage from "./views/About";
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

        <Route path="*">
          <h1>Page not found.</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
