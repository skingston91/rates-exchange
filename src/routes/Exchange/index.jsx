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
      currentBalance: 200
    };
  }

  componentDidMount() {
    this.props.fetchCurrencyData(this.state.currentCurrency);
  }

  handleChange = checked => {
    this.setState({ checked });
  };

  handleSwitch = () => {
    const { currentCurrency, convertTo } = this.state;
    this.setState({ currentCurrency: convertTo, convertTo: currentCurrency });
  };

  render() {
    const { currencyData } = this.props;
    const { currentCurrency, convertTo } = this.state;
    const currentCurrencyData = currencyData[currentCurrency];
    if (!currentCurrencyData || currentCurrencyData.loading) {
      return <p>Loading...</p>;
    }
    const currentRate = currentCurrencyData.result[convertTo];
    console.log(currentCurrencyData, convertTo);
    return (
      <div className="Exchange">
        <Header
          headerText="Exchange"
          leftIconProps={closeIcon}
          leftLink={"/"}
          rightIconProps={ratesIcon}
          rightLink={"/rates/rates"}
        />
        {currentCurrencyData && currentCurrencyData.error && <p>Error!</p>}
        {currentCurrencyData && currentCurrencyData.result && (
          <React.Fragment>
            <ExchangeCurrency
              header={currentCurrency}
              subText={`Balance: ${
                availableCurrencies[currentCurrency].symbol
              }${userReducer.money[currentCurrency] || 0.0}`}
            />
            <div className="Exchange__center">
              <button className="Exchange__switch">
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
                header={convertTo}
                subText={`Balance: ${
                  availableCurrencies[convertTo].symbol
                }${userReducer.money[convertTo] || 0.0}`}
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
