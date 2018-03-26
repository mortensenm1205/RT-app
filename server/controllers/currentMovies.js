var movieData = require('../config/rt.js');

movieData.getMoviesCurrentlyInTheaters()
    .then((response) => {
      let results = response.data.results;
      results.forEach((movieData) => {
        let movie = {
          title: movieData.title,
          overview: movieData.overview
        };
        console.log(movie);
      });

    })
    .catch((error) => {
      console.log(error);
    });
