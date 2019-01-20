## Task
Recreation of the Rates/Exchange page from scratch as single page React app with Redux, including exchange rates refresh every 10 seconds to get the latest rates for GBP, EUR and USD.

<br>
*Notes*
The extra rates page was added in error due to misreading what page I needed to implement so I've left in the basic shell of the page along with the React-Router components before I switched to the correct page I needed to build, but it shows more of an idea of how the application could be structured if it was a larger app. So only the main page is meant to be functional.

Some parts of the page do not work due to restrictions from the api (see limitations for that) 

### Installation Process
*Yarn Install*<br>
Run yarn install to set up all the dependencies 

### How to run
*Yarn Start* <br>
Running yarn start after yarn install will runs the app in the development mode.<br>
The page should then open in the browser automatically, if not open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

### `yarn test`
Launches the Jest test runner in the interactive watch mode.<br>

### Tech Choices
Uses Create-React-App to save time doing boilerplate. This means we are using Webpack, Babel, React, scss which are packaged together, if it was a longer term project I would have likely used my own build process although this would likely have used nearly all the same tech as Create-React-App. Again if this was going to be a forming a larger project I would have used Typescript however the likely overhead of time to get Typings set up for Redux would offset the value.

BEM was used instead of CSS just for speed of development as that was what I was using in my most recent job and so is freshest otherwise CSS modules could have just have been easily used. For the same reason is why I didn't use css in js.

If the rate's api had a graphQl wrapper, I would have likely used GraphQl which would have removed the need for redux (and local state management could be handled by apollo-link-state) therefore removing the need for a ton of tests/files and would have made Typescript a more viable option.

## Limitations
The api's listed by the task only support USD to other currencies, so currently any changes from the base currency of USD will break the system as the api will reject the request as it asks for a paid for license. If we had a paid license for a rates api, the code should all work as expected. To meet the requirements of the api license, I've limited the user to only be able to do transactions from USD to another (although using the switch functionality will break it still). 

I've left the rates refresh for the current selected currency commented out as it has a free api limit of 1000 which could create issues if left running. To get this to work uncomment out the following lines in ComponentDidMount in the src/routes/Exchange/index. 
```
// this.interval = setInterval(
    //   () => this.props.fetchCurrencyData(this.state.convertFrom),
    //   10000
    // );
```

The Switch functionality doesn't work without extra api calls, which as you are changing the base currency will break the application as it will get rejected request from the api. The 'easy' solution of switching the currency and calculating the inverse of the currency doesn't work as the currencyData from redux is currenctly the single of source of truth. This should be refactored and be stored earlier on so we can calculate currency rates in reverse and have them stored in redux ready for usage by the exchange components, although this still wouldn't solve the issue of the user trying to compare GBR and EUR and in the current state would break as the api doesn't return that data.

 ### Next Steps

 - Added Typescript
 - Investigated potenially creating a GraphQl wrapper for one of the API's so we could remove redux bloat
 - Better styling for the - and + elements
 - Switch button to not require another api request if the data is already stored else under the 'from currency'



 

