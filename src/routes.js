const express = require('express');
const main  = require('./curr.js');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {title: 'Veldu banka'});
  });

/* FORCE error on '/m5' */
router.get('/m5', (req, res, next) => {
  res.render('error', { title: 'Skellur!', error: 'Eitthvað fór úrskeiðis :(' });
});

/* GET arion page */
router.get('/arion', (req, res, next) => {
  main.currencies('arion')
  .then((result) => {
    res.render('arion', { title: 'Gengi Gjaldmiðla', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', error: 'Eitthvað fór úrskeiðis :(' });
  });
});

/* GET lb page */
router.get('/lb', (req, res, next) => {
  main.currencies('lb')
  .then((result) => {
    res.render('lb', { title: 'Gengi Gjaldmiðla', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', error: 'Eitthvað fór úrskeiðis :(' });
  });
});

module.exports = router;
