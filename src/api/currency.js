// TODO move the api request to a node server to hide our apikey
import apiKey from "../data/apiKey";

export function fetchCurrency(currency) {
  console.log(currency);
  return fetch(
    `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=${
      currency ? currency : "USD"
    }`
  ).then(res => {
    console.log(res);
    return res.json();
  });
}
