const http = require('http');
const axios = require('axios');

const _apiKey = '?api_key=ad32f8846eb376d82bf15766919e79ff';

function currentDate() {
  let dateNow = JSON.stringify(new Date(Date.now()));
  dateNow = dateNow.split('T')[0].split('').splice(1).join('');
  return dateNow;
}

function lastTwoWeeks() {
  let twoWeeks = JSON.stringify(new Date(Date.now() - 12096e5));
  twoWeeks = twoWeeks.split('T')[0].split('').splice(1).join('');
  return twoWeeks;
}

var urlToMoviesCurrentlyInTheaters = `http://api.themoviedb.org/3/discover/movie${_apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${lastTwoWeeks()}&primary_release_date.lte=${currentDate()}`

module.exports = {

  getMoviesCurrentlyInTheaters() {
    return axios.get(urlToMoviesCurrentlyInTheaters)
  }

};
