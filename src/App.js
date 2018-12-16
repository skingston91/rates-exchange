import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavTab from "./components/NavTab";
import Rates from "./routes/Rates";
import Converter from "./routes/Converter";
import Alerts from "./routes/Converter";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="NavBar">
            <NavTab text="Rates" to="/" />
            <NavTab text="Converter" to="/converter" />
            <NavTab text="Alerts" to="/alerts" />
          </div>
          <div className="Route">
            <Route path="/" exact component={Rates} />
            <Route path="/converter/" component={Converter} />
            <Route path="/alerts/" component={Alerts} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
