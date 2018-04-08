var movieData = require('../config/rt.js');

module.exports = {

  displayMoviesCurrentlyInTheaters(req, res, next) {
    movieData.getMoviesCurrentlyInTheaters().then((response) => {
      const maxMoviesLength = 10;
      let currentMovies = response.data.results;
      let topTenCurrentMovies = [];

      for(var i = 0; i < maxMoviesLength; i++) {
        topTenCurrentMovies.push(currentMovies[i])
      }
      res.send(topTenCurrentMovies);
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
