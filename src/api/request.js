import apiKey from "../data/apiKey";

const request = (base = "USD") => {
  fetch(
    `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=${base}`
  )
    .then(res => res.json())
    .then(
      result => {
        console.log(result);
      }
      //   result => {
      //     this.setState({ isLoaded: true, items: result.items });
      //   }, // Note: it's important to handle errors here
      //   // instead of a catch() block so that we don't swallow
      //   // exceptions from actual bugs in components.
      //   error => {
      //     this.setState({ isLoaded: true, error });
      //   }
    );
};
