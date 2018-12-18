import {
  FETCH_CURRENCY_STARTING,
  FETCH_CURRENCY_DONE,
  FETCH_CURRENCY_FAILED
} from "../actions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_CURRENCY_STARTING:
      return startLoadingData(state, payload);
    case FETCH_CURRENCY_FAILED:
      return failedLoadingData(state, payload);
    case FETCH_CURRENCY_DONE:
      return doneLoadingData(state, payload);
    default:
      return state;
  }
}

function startLoadingData(state, { currency }) {
  return updateResult(state, currency, () => ({
    loading: true,
    error: false
  }));
}

function failedLoadingData(state, { currency, error }) {
  return updateResult(state, currency, () => ({
    loading: false,
    error
  }));
}

function doneLoadingData(state, { currency, result }) {
  return updateResult(state, currency, () => ({
    loading: false,
    error: false,
    result
  }));
}

function updateResult(state, currency, reducer) {
  const newState = { ...state };
  newState[currency] = Object.assign({}, reducer(newState[currency] || {}));
  return newState;
}
