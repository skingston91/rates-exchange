import { FETCH_CURRENCY_DONE, FETCH_CURRENCY_FAILED } from "./types";

export function fetchCurrencyData(currency) {
  return (dispatch, getState, { fetchCurrency }) => {
    return fetchCurrency(currency).then(
      result => {
        if (result.error) {
          dispatch({
            type: FETCH_CURRENCY_FAILED,
            payload: { currency, error: result.description }
          });
        } else {
          dispatch({
            type: FETCH_CURRENCY_DONE,
            payload: { currency, result: result.rates }
          });
        }
      },
      error => {
        dispatch({
          type: FETCH_CURRENCY_FAILED,
          payload: { currency, error }
        });
      }
    );
  };
}
