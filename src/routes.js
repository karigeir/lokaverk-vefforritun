const express = require('express');
const main  = require('./main.js')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Fébreytar'});
  });

/* GET home page. */
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
