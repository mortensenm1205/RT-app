var movieData = require('../config/rt.js');

module.exports = {
  getSearchMovieData(req, res, next) {
    movieData.searchMovieById(req.body.id).then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(error => console.log(error))
  }
}
