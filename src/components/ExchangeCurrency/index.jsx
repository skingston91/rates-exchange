import React from "react";

import Icon from "../../components/Icon";

import { ReactComponent as Down } from "../../assets/icons/chevron-down.svg";

import "./styles.scss";

const downIcon = {
  SvgComponent: Down,
  stroke: "black"
};

const ExchangeCurrency = ({
  currentCurrency,
  subText,
  color = "white",
  currencyAmount = 0,
  handleCurrencyChange,
  handleCurrencyTypeChange,
  availableCurrencies,
  prefix
}) => {
  const currentValue = parseFloat(currencyAmount) || 0;
  return (
    <div className={`ExchangeCurrency ExchangeCurrency--${color}`}>
      <div className="ExchangeCurrency__data">
        <div className="ExchangeCurrency__header">
          <select
            className="ExchangeCurrency__header--text"
            value={currentCurrency}
            onChange={handleCurrencyTypeChange}
          >
            {availableCurrencies.map(availableCurrency => (
              <option key={availableCurrency} value={availableCurrency}>
                {availableCurrency}
              </option>
            ))}
          </select>
          <Icon className="ExchangeCurrency__header--icon" {...downIcon} />
        </div>
        <div className="ExchangeCurrency__sub_text">{subText}</div>
      </div>
      <div>
        {currentValue !== 0 && (
          <span className="ExchangeCurrency__input--prefix"> {prefix} </span>
        )}
        <input
          className="ExchangeCurrency__input"
          type="number"
          value={currentValue}
          onChange={e => handleCurrencyChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ExchangeCurrency;
