var express = require('express');
var router = express.Router();
var path = require('path');
var movieData = require('../server/config/rt.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  movieData.getMoviesCurrentlyInTheaters().then((response) => {
    let currentMovie = response.data.results;
    let movieOveriew = {};
    currentMovie.map((movie) => {
      movieOveriew.title = movie.title;
      movieOveriew.overview = movie.overview;
      res.write(JSON.stringify(movieOveriew));
    })
    res.end();
  })
  .catch((error) => {
    console.error(error);
  });
});

module.exports = router;
