import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import SharedRates from "./routes/SharedRates";
import Exchange from "./routes/Exchange";

import reducers from "./state/reducers";
import * as api from "./api";

import "./App.scss";

const createStoreWithMiddleware = applyMiddleware(thunk.withExtraArgument(api))(
  createStore
);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <div className="App">
            <div className="Route">
              <Route exact path="/" component={Exchange} />
              <Route path="/rates" component={SharedRates} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
