import { combineReducers } from "redux";
import currencyReducer from "./reducer_currency";

const rootReducer = combineReducers({
  currency: currencyReducer
});

export default rootReducer;
