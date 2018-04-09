import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './CurrentMovieList/MovieList';

class RT extends Component {
  render() {
    return (
      <div>
        <div>
          <MovieList />
        </div>
        <Route path='/user' render={() => <h2>Hllo</h2>} />
      </div>
    )
  }
}


export default RT;
