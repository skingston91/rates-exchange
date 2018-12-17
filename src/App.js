import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import SharedRates from "./routes/SharedRates";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Route">
            <Route path="/" component={SharedRates} />
            <Route path="/rates" component={SharedRates} />
            <Route render={() => <Redirect to={"/"} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
