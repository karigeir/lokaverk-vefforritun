let init = () => {
  getDataCurrency();
}

let getDataCurrencyArion = (source="Arion") => {
  $.get(`http://apis.is/currency/${source}`, (data) => {
    let currency = data.results;
    $('').html('');
    data.map((currency)=> {
      $('').append(`< tr><td>${flight.date}</td><td>${flight.flightNumber}</td><td>${flight.to}</td><td>${flight.plannedArrival}</td><td>${flight.realArrival}</td></tr>`)
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
