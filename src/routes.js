const express = require('express');
const curr = require('./curr.js');

const router = express.Router(); // eslint-disable-line new-cap

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Myntbreytir' });
});

/* FORCE error on '/m5' */
router.get('/m5', (req, res) => {
  res.render('error', { title: 'Skellur!', message: 'Eitthvað fór úrskeiðis :(' });
});

/* GET arion page */
router.get('/arion', (req, res) => {
  curr.currencies('arion')
  .then((result) => {
    res.render('arion', { title: 'Myntbreytir', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', message: 'Eitthvað fór úrskeiðis :(', error });
  });
});

/* GET lb page */
router.get('/lb', (req, res) => {
  curr.currencies('lb')
  .then((result) => {
    res.render('lb', { title: 'Myntbreytir', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', message: 'Eitthvað fór úrskeiðis :(', error });
  });
});

module.exports = router;
