$.(document).ready(function() {
  init;
})

let init = () => {
  getDataCurrencyArion();
}

let getDataCurrencyArion = (source="Arion") => {
  $.get(`http://apis.is/currency/${source}`, (data) => {
    let currencies = data.results;
    $('#currency__container').html('');
    currencies.map((currency)=> {
      $('#currency__container').append(`< tr><td>${currency.shortName}</td><td>${currency.bidValue}</td><td>${currency.askValue}</td></tr>`)
    });
  });
}

init();

// let getDataBrottfarirIs = (lang="is", type="departures") => {
//   $.get(`http://apis.is/flight?language=${lang}&type=${type}`, (data) => {
//     let flights = data.results;
//     $('#flights-container').html('');
//     flights.map((flight)=> {
//       $('#flights-container').append(`< tr><td>${flight.date}</td><td>${flight.flightNumber}</td><td>${flight.to}</td><td>${flight.plannedArrival}</td><td>${flight.realArrival}</td></tr>`)
//     });
//   });
// }
