var express = require('express');
var router = express.Router();
var movie = require('../server/config/rt.js');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', movie.getMoviesCurrentlyInTheaters)

module.exports = router;
