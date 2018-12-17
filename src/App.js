import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SharedRates from "./routes/SharedRates";
import Exchange from "./routes/Exchange";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Route">
            <Route exact path="/" component={Exchange} />
            <Route path="/rates" component={SharedRates} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
