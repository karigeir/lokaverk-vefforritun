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
