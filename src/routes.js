const express = require('express');
const main  = require('./main.js')
const exchange = require('./exchange.js')

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {title: 'Fébreytar'});
  });

/* FORCE error on '/m5' */
router.get('/m5', (req, res, next) => {
  res.render('error', { title: 'Skellur!', error: 'Eitthvað fór úrskeiðis :(' });
});

/* GET arion page */
router.get('/arion', (req, res, next) => {
  main.currencies('arion')
  .then((result) => {
    res.render('arion', { title: 'Arion - Gengi Gjaldmiðla', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', error: 'Eitthvað fór úrskeiðis :(' });
  });
});

/* GET lb page */
router.get('/lb', (req, res, next) => {
  main.currencies('lb')
  .then((result) => {
    res.render('lb', { title: 'Landsbankinn - Gengi Gjaldmiðla', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', error: 'Eitthvað fór úrskeiðis :(' });
  });
});

module.exports = router;
