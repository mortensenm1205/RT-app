var express = require('express');
var router = express.Router();
var currentMovieData = require('../controllers/currentMovieData');
var searchMovieData = require('../controllers/searchMovieData');

/* GET home page. */
router.get('/', currentMovieData.displayMoviesCurrentlyInTheaters);

router.post('/:movieId', searchMovieData.getSearchMovieData);


module.exports = router;
