import React from "react";

import Header from "../../components/Header";
import Icon from "../../components/Icon";
import ExchangeCurrency from "../../components/ExchangeCurrency";

import { ReactComponent as Close } from "../../assets/icons/x.svg";
import { ReactComponent as TrendingUp } from "../../assets/icons/trending-up.svg";
import { ReactComponent as Switch } from "../../assets/icons/shuffle.svg";
import { ReactComponent as Down } from "../../assets/icons/chevron-down.svg";

import "./styles.scss";

const closeIcon = {
  SvgComponent: Close,
  stroke: "black"
};

const ratesIcon = {
  SvgComponent: TrendingUp,
  stroke: "black"
};

const ratesBlueIcon = {
  SvgComponent: TrendingUp,
  stroke: "#0167fd",
  height: "1rem",
  width: "1rem"
};

const switchBlueIcon = {
  SvgComponent: Switch,
  stroke: "#0167fd"
};

const Exchange = () => {
  return (
    <div className="Exchange">
      <Header
        headerText="Exchange"
        leftIconProps={closeIcon}
        leftLink={"/"}
        rightIconProps={ratesIcon}
        rightLink={"/rates/rates"}
      />
      <ExchangeCurrency header={"GBP"} subText="Balance: £2.77" color="white" />
      <div className="Exchange__center">
        <button className="Exchange__switch">
          <Icon {...switchBlueIcon} />
        </button>
        <div className="Exchange__rate">
          <Icon {...ratesBlueIcon} />
          <h4 className="Exchange__rate--text">£1 = $1.111</h4>
        </div>
      </div>
      <div className="Exchange__bottom">
        <ExchangeCurrency header={"GBP"} subText="Balance: £2.77" />
        <div className="Exchange__button">
          <input type="button" value="Exchange" />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
