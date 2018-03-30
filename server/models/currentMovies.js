var movieData = require('../config/rt.js');
var fs = require('fs');

function writeFileSync(data) {
  data = JSON.stringify(data);
  fs.writeFileSync('./server/config/currentMovies.json', data)
}

function readFile() {
  var data = fs.readFileSync('./server/config/currentMovies.json');
  data += JSON.parse(data);
  console.log(typeof data);
}

function setUpCurrentMovies() {
    movieData.getMoviesCurrentlyInTheaters()
    .then((response) => {
      var results = response.data.results;
      results.map((movie) => {
        var pair = {
          title: movie.title,
          overview: movie.overview
        }
        writeFileSync(pair);
        readFile();
      })
    })
    .catch((error) => {
      console.log(error);
    });
}

setUpCurrentMovies();

module.exports = {

}
