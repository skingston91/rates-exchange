import React from "react";

import Icon from "../../components/Icon";

import { ReactComponent as Down } from "../../assets/icons/chevron-down.svg";

import "./styles.scss";

const downIcon = {
  SvgComponent: Down,
  stroke: "black"
};

const ExchangeCurrency = ({ header, subText, color = "white" }) => {
  return (
    <div className={`ExchangeCurrency ExchangeCurrency--${color}`}>
      <div className="ExchangeCurrency__data">
        <div className="ExchangeCurrency__header">
          <h2 className="ExchangeCurrency__header--text">{header}</h2>
          <Icon className="ExchangeCurrency__header--icon" {...downIcon} />
        </div>
        <div className="ExchangeCurrency__sub_text">{subText}</div>
      </div>
      <input
        className="ExchangeCurrency__input"
        type="number"
        placeholder="0"
      />
    </div>
  );
};

export default ExchangeCurrency;
