import React from "react";
import { Route } from "react-router-dom";

import NavBar from "../../components/NavBar";
import navElements from "../../data/ratesNav";
import Header from "../../components/Header";

import { ReactComponent as arrowLeft } from "../../assets/icons/arrow-left.svg";

import Rates from "./Rates";
import Converter from "./Converter";
import Alerts from "./Alerts";

const backArrow = {
  SvgComponent: arrowLeft
};

const SharedRates = () => {
  return (
    <div className="SharedRates">
      <Header headerText="Rates" leftIconProps={backArrow} leftLink={"/"} />
      <NavBar navElements={navElements} />
      <Route path="/rates/rates" component={Rates} />
      <Route path="/rates/converter" component={Converter} />
      <Route path="/rates/alerts" component={Alerts} />
    </div>
  );
};

export default SharedRates;
