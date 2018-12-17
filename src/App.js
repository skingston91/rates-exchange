import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import arrowLeft from "./assets/icons/arrow-left.svg";

import NavBar from "./components/NavBar";
import Rates from "./routes/Rates";
import Converter from "./routes/Converter";
import Alerts from "./routes/Alerts";

import "./App.css";

//TODO replace header hack

const navElements = [
  {
    text: "Rates",
    to: "/rates"
  },
  {
    text: "Converter",
    to: "/converter"
  },
  {
    text: "Alerts",
    to: "/alerts"
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Header">
            <img className="Header__icon" src={arrowLeft} alt="back" />
            <p className="Header__text"> Rates </p>
            <span />
          </div>
          <NavBar navElements={navElements} />
          <div className="Route">
            <Route exact path="/" render={() => <Redirect to={"/rates"} />} />
            <Route path="/rates" component={Rates} />
            <Route path="/converter" component={Converter} />
            <Route path="/alerts" component={Alerts} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
