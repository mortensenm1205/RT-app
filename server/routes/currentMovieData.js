var express = require('express');
var router = express.Router();
var currentMovieData = require('../controllers/currentMovieData');

/* GET home page. */
router.get('/', currentMovieData.displayMoviesCurrentlyInTheaters);

router.get('/:testRoute', (req, res, next) => {
  res.send(req.params.testRoute);
});

module.exports = router;
