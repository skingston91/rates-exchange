import currencyReducer from "../../redux/reducers/reducer_currency";
import {
  FETCH_CURRENCY_DONE,
  FETCH_CURRENCY_FAILED
} from "../../redux/actions/types";
const INITIAL_STATE = {};

describe("Currency Reducer", () => {
  it("handles action with unknown type", () => {
    const action = {
      type: "",
      payload: {
        currency: "USD"
      }
    };
    expect(currencyReducer(INITIAL_STATE, action)).toEqual({});
  });

  it("handles action of type FETCH_CURRENCY_DONE", () => {
    const action = {
      type: FETCH_CURRENCY_DONE,
      payload: { currency: "USD", result: { GBP: "1.1" } }
    };
    expect(currencyReducer(INITIAL_STATE, action)).toEqual({
      USD: {
        loading: false,
        error: false,
        result: {
          GBP: "1.1"
        }
      }
    });
  });

  it("handles action of type FETCH_CURRENCY_FAILED", () => {
    const action = {
      type: FETCH_CURRENCY_FAILED,
      payload: { currency: "USD", error: 500 }
    };
    expect(currencyReducer(INITIAL_STATE, action)).toEqual({
      USD: {
        loading: false,
        error: 500
      }
    });
  });
});
