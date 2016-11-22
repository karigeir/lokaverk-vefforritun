// $.(document).ready(function() {
//   init;
// })
//
// let init = () => {
//   getDataCurrencyArion();
// }
//
// let getDataCurrencyArion = (source="Arion") => {
//   $.get(`http://apis.is/currency/${source}`, (data) => {
//     let currencies = data.results;
//     $('#currency__container').html('');
//     currencies.map((currency)=> {
//       $('#currency__container').append(`< tr><td>${currency.shortName}</td><td>${currency.bidValue}</td><td>${currency.askValue}</td></tr>`)
//     });
//   });
// }
//
// init();

const axios = require('axios');

const baseURL = process.env.BASEURL || 'http://apis.is';
const instance = axios.create({ baseURL });

function currencies(source) {
  const promise = instance;
  return promise.get(`/currency/${source}`);
}

module.exports = {
  currencies,
}
