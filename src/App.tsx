import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import AboutPage from "./views/About";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <>
            <AboutPage />
          </>
        </Route>
        <Route path="/">
          <>
            <Homepage />
          </>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
