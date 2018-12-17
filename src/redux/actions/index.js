import {
  FETCH_DATA_STARTING,
  FETCH_DATA_DONE,
  FETCH_DATA_FAILED
} from "./types";

export function fetchData(props) {
  return dispatch => {
    dispatch({ type: FETCH_DATA_STARTING, payload: { ...props } });
    return fetchData({ ...props }).then(
      result =>
        dispatch({
          type: FETCH_DATA_DONE,
          payload: { ...props, result }
        }),
      error =>
        dispatch({
          type: FETCH_DATA_FAILED,
          payload: { ...props, error }
        })
    );
  };
}
