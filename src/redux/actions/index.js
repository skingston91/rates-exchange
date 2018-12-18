// TODO move the api request to a node server to hide our apikey
import apiKey from "../../data/apiKey";

import { FETCH_CURRENCY_DONE, FETCH_CURRENCY_FAILED } from "./types";

export function fetchCurrencyData(currency) {
  return dispatch => {
    return fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=${
        currency ? currency : "USD"
      }`
    )
      .then(res => res.json())
      .then(
        result =>
          dispatch({
            type: FETCH_CURRENCY_DONE,
            payload: { currency, result: result.rates }
          }),
        error =>
          dispatch({
            type: FETCH_CURRENCY_FAILED,
            payload: { currency, error }
          })
      );
  };
}
