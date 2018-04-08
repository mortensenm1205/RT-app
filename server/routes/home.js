var express = require('express');
var router = express.Router();
var movieData = require('../controllers/movieData');

/* GET home page. */
router.get('/', movieData.displayMoviesCurrentlyInTheaters);

module.exports = router;
