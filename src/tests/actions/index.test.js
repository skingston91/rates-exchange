import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { fetchCurrencyData } from "../../redux/actions";
import { FETCH_CURRENCY_DONE } from "../../redux/actions/types";

import { currencyData } from "../mockApi";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("actions index test fetchCurrencyData", () => {
  let action;
  beforeEach(() => {
    fetch.resetMocks();
    action = fetchCurrencyData("USD");
    fetch.mockResponseOnce(JSON.stringify(currencyData.result));
  });
  afterEach(() => {});

  it("should execute fetchCurrencyData", () => {
    const store = mockStore({});
    // Return the promise
    return store.dispatch(action).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(FETCH_CURRENCY_DONE);
    });
  });

  it("should execute fetchCurrencyData and return success status", () => {
    const store = mockStore({});
    return store.dispatch(action).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(FETCH_CURRENCY_DONE);
      expect(actions[0].payload.result.GBP).toEqual(1.501231);
    });
  });
});
