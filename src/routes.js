const express = require('express');
const main  = require('./main.js')

const router = express.Router();

/* GET home page. */
router.get('/:source', function(req, res, next) {
  console.log(req.params)
  main.currencies(req.params.source)
  .then((result) => {
    res.render('index', { title: 'Fébreytirinn', currencies: result.data.results });
  })
  .catch((error) => {
    res.render('error', { title: 'Skellur!', error });
  });
});

module.exports = router;
