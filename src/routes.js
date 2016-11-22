const express = require('express');
const main  = require('./main.js')

const router = express.Router();

/* GET home page. */
router.get('/:source', (req, res, next) => {
  main.currencies(req.params.source)
  .then((result) => {
    res.render('index', { title: 'Gengi gjaldmiðla', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', error: 'Eitthvað fór úrskeiðis :(' });
  });
});

module.exports = router;
