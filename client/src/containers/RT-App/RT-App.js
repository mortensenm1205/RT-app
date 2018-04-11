import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './CurrentMovieList/MovieList';
import MovieCard from './MovieCard/MovieCard';

class RT extends Component {
  render() {
    return (
      <div>
        <h1>myRotten Tomatoes</h1>
        <Route exact path='/' component={MovieList} />
        <Route exact path='/:movieId' component={MovieCard} />
      </div>
    )
  }
}


export default RT;
