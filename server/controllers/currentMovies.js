var movieData = require('../config/rt.js');
var fs = require('fs');

function setUpCurrentMovies() {
  movieData.getMoviesCurrentlyInTheaters()
  .then((response) => {
    var results = response.data.results;
    fs.writeFile('./server/config/currentMovies.json', results, (err) => {
      if(err) throw err;
      console.log('This worked');
    })
  })
  .catch((error) => {
    console.log(error);
  });
}

setUpCurrentMovies();

module.exports = {


}
