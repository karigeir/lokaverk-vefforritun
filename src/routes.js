const express = require('express');
const main  = require('./main.js')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Fébreytar'});
  });

/* GET home page. */
router.get('/:source', function(req, res, next) {
  console.log(req.params)
  main.currencies(req.params.source)
  .then((result) => {
    res.render('curr-table', { title: 'Fébreytirinn', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', error });
  });
});

module.exports = router;
