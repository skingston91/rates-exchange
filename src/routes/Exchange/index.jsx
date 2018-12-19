import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../components/Header";
import Icon from "../../components/Icon";
import ExchangeCurrency from "../../components/ExchangeCurrency";

import { ReactComponent as Close } from "../../assets/icons/x.svg";
import { ReactComponent as TrendingUp } from "../../assets/icons/trending-up.svg";
import { ReactComponent as Switch } from "../../assets/icons/shuffle.svg";

import { fetchCurrencyData } from "../../redux/actions/index";

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

const availableCurrencies = {
  GBP: {
    symbol: "£"
  },
  USD: {
    symbol: "$"
  },
  EUR: {
    acronym: "EUR",
    symbol: "€"
  }
};

const userReducer = {
  defaultCurrency: "USD",
  money: {
    GBP: 200,
    USD: 100,
    EUR: 0
  }
};

// defaultCurrentCurrency, currentBalance would normally come from a users reducer
// The requests only work as USD on the free account
class Exchange extends Component {
  constructor() {
    super();
    this.state = {
      convertFrom: userReducer.defaultCurrency,
      convertTo: "GBP",
      currencyFromAmount: 0,
      currencyToAmount: 0
    };
  }
  componentDidMount() {
    // commented out as hitting data limit
    // this.interval = setInterval(
    //   () => this.props.fetchCurrencyData(this.state.currentCurrency),
    //   10000
    // );
    this.props.fetchCurrencyData(this.state.convertFrom);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Can't test with this api
  handleSwitch = () => {
    const { convertFrom, convertTo } = this.state;
    this.setState({ currentCurrency: convertTo, convertTo: convertFrom });
  };

  calculateTransaction = (convertValue, convertRate, divide) => {
    if (divide) return convertValue / convertRate;
    return convertValue * convertRate;
  };

  render() {
    const { currencyData } = this.props;
    const {
      convertFrom,
      convertTo,
      currencyFromAmount,
      currencyToAmount
    } = this.state;
    const currentCurrencyData = currencyData[convertFrom];
    if (!currentCurrencyData) {
      return <p>Loading...</p>;
    }

    if (
      (currentCurrencyData && currentCurrencyData.error) ||
      (!currentCurrencyData.result || !currentCurrencyData.result[convertTo])
    ) {
      return <p>Error!</p>;
    }

    const currentRate = currentCurrencyData.result[convertTo];
    return (
      <div className="Exchange">
        <Header
          headerText="Exchange"
          leftIconProps={closeIcon}
          leftLink={"/"}
          rightIconProps={ratesIcon}
          rightLink={"/rates/rates"}
        />
        {currentCurrencyData && currentCurrencyData.result && (
          <React.Fragment>
            <ExchangeCurrency
              currentCurrency={convertFrom}
              availableCurrencies={Object.keys(availableCurrencies)}
              subText={`Balance: ${
                availableCurrencies[convertFrom].symbol
              }${userReducer.money[convertFrom] || 0.0}`}
              currencyAmount={currencyFromAmount}
              handleCurrencyChange={currencyFromAmount => {
                const newCurrencyToAmount = this.calculateTransaction(
                  parseFloat(currencyFromAmount),
                  currentRate,
                  false
                );
                this.setState({
                  currencyFromAmount,
                  currencyToAmount: newCurrencyToAmount
                });
              }}
              handleCurrencyTypeChange={currency => {
                this.setState({ convertFrom: currency });
              }}
              prefix="-"
            />
            <div className="Exchange__center">
              <button
                className="Exchange__switch"
                onClick={() => this.handleSwitch()}
              >
                <Icon {...switchBlueIcon} />
              </button>
              <div className="Exchange__rate">
                <Icon {...ratesBlueIcon} />
                <h4 className="Exchange__rate--text">{`${
                  availableCurrencies[convertFrom].symbol
                }1 = ${
                  availableCurrencies[convertTo].symbol
                }${Number.parseFloat(currentRate).toFixed(4)}`}</h4>
              </div>
            </div>
            <div className="Exchange__bottom">
              <ExchangeCurrency
                currentCurrency={convertTo}
                availableCurrencies={Object.keys(availableCurrencies)}
                subText={`Balance: ${
                  availableCurrencies[convertTo].symbol
                }${userReducer.money[convertTo] || 0.0}`}
                currencyAmount={currencyToAmount}
                handleCurrencyChange={currencyToAmount => {
                  const newCurrentCurrencyAmount = this.calculateTransaction(
                    parseFloat(currencyToAmount),
                    currentCurrencyData.result[convertTo],
                    true
                  );
                  this.setState({
                    currencyFromAmount: newCurrentCurrencyAmount,
                    currencyToAmount
                  });
                }}
                handleCurrencyTypeChange={currency => {
                  this.setState({ convertTo: currency });
                }}
                prefix="+"
              />
              <div className="Exchange__button">
                <input type="button" value="Exchange" />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencyData: state.currency
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrencyData: currency => dispatch(fetchCurrencyData(currency))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exchange);
