import apiKey from "../data/apiKey";

export function fetchCurrency(currency) {
  return fetch(
    `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=${currency}`
  ).then(res => res.json());
}
