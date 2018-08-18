const fs = require('fs');
const fetch = require('node-fetch');

// fetch JSON  file with info about each currency

fetch("https://free.currencyconverterapi.com/api/v6/countries").then(function (response) {
  return response.json();
}).then(function (myJson) {
  let results = myJson.results;
  results = JSON.stringify(results, null, 2);
  console.log(results);

  //  save json to "resources/currencies.json", file is replace if already exists

  fs.writeFile('./resources/currencies.json', results, err => {
    if (err) console.log(err);
    console.log('The file has been saved!');
  });
}).catch(e => console.log(e));