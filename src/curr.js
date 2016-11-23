const axios = require('axios');

const baseURL = process.env.BASEURL || 'http://apis.is';
const instance = axios.create({ baseURL });

/*
 * Fall sem nær í gengi gjaldmiðla gagnvart krónu, skilar promise.
 * @returns {Promise} - Promise með mögulegum gjaldmiðlum.
 */
function currencies(source) {
  const promise = instance;
  return promise.get(`/currency/${source}`);
}

module.exports = {
  currencies,
}
