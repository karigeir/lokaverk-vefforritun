const express = require('express');
const main  = require('./main.js')

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'Fébreytar'});
  });

/* FORCE error on '/m5' */
router.get('/m5', (req, res, next) => {
  res.render('error', { title: 'Skellur!', error: 'Eitthvað fór úrskeiðis :(' });
});

/* GET currency page */
router.get('/:source', (req, res, next) => {
  main.currencies(req.params.source)
  .then((result) => {
    res.render('curr-table', { title: 'Gengi Gjaldmiðla', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', error: 'Eitthvað fór úrskeiðis :(' });
  });
});

module.exports = router;
