import {
  FETCH_DATA_STARTING,
  FETCH_DATA_DONE,
  FETCH_DATA_FAILED
} from "../actions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_DATA_STARTING:
      return startLoadingData(state, payload);
    case FETCH_DATA_FAILED:
      return failedLoadingData(state, payload);
    case FETCH_DATA_DONE:
      return doneLoadingData(state, payload);
    default:
      return state;
  }
}

function startLoadingData(state, { type, id }) {
  return updateResult(state, type, id, () => ({
    loading: true,
    error: false
  }));
}

function failedLoadingData(state, { type, id, error }) {
  return updateResult(state, type, id, () => ({
    loading: false,
    error
  }));
}

function doneLoadingData(state, { type, id, result }) {
  return updateResult(state, type, id, () => ({
    loading: false,
    error: false,
    result
  }));
}

function updateResult(state, type, id, reducer) {
  const newState = { ...state };
  newState[type] = Object.assign({}, newState[type] || {});
  newState[type][id] = Object.assign({}, reducer(newState[type][id] || {}));
  return newState;
}
