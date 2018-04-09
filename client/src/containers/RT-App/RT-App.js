import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './CurrentMovieList/MovieList';
import MovieCard from './MovieCard/MovieCard';

class RT extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={MovieList} />
        <Route path='/user' component={MovieCard} />
      </div>
    )
  }
}


export default RT;
