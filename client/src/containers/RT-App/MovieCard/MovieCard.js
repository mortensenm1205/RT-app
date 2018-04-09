import React, { Component } from 'react';


class MovieCard extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Movie Title</h1>
        <p>Movie Overview</p>
        <div>Movies Popularity</div>
      </div>
    )
  }
}

export default MovieCard;
