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
      currentCurrency: userReducer.defaultCurrency,
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
    this.props.fetchCurrencyData(this.state.currentCurrency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Can't test with this api
  handleSwitch = () => {
    const { currentCurrency, convertTo } = this.state;
    this.setState({ currentCurrency: convertTo, convertTo: currentCurrency });
  };

  calculateTransaction = (convertValue, convertRate) => {
    return convertValue / convertRate;
  };

  calculateFromTransaction = (convertValue, convertRate) => {
    return convertValue / convertRate;
  };

  render() {
    const { currencyData } = this.props;
    const {
      currentCurrency,
      convertTo,
      currencyFromAmount,
      currencyToAmount
    } = this.state;
    const currentCurrencyData = currencyData[currentCurrency];

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
              currentCurrency={currentCurrency}
              availableCurrencies={Object.keys(availableCurrencies)}
              subText={`Balance: ${
                availableCurrencies[currentCurrency].symbol
              }${userReducer.money[currentCurrency] || 0.0}`}
              currencyAmount={currencyFromAmount}
              handleCurrencyChange={currencyFromAmount => {
                const newCurrencyToAmount = this.calculateTransaction(
                  parseInt(currencyFromAmount, 8),
                  currentRate
                );
                this.setState({
                  currencyFromAmount,
                  currencyToAmount: newCurrencyToAmount
                });
              }}
              handleCurrencyTypeChange={currency => {
                this.setState({ currentCurrency: currency });
              }}
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
                  availableCurrencies[currentCurrency].symbol
                }1 = ${
                  availableCurrencies[convertTo].symbol
                }${currentRate}`}</h4>
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
                    parseInt(currencyToAmount, 8),
                    currentCurrencyData.result[currentCurrency]
                  );
                  this.setState({
                    currencyFromAmount: newCurrentCurrencyAmount,
                    currencyToAmount
                  });
                }}
                handleCurrencyTypeChange={currency => {
                  this.setState({ convertTo: currency });
                }}
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
