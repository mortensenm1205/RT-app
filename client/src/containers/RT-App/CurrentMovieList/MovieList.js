import React, { Component } from 'react';
import MovieOverview from '../../../components/MovieOverview';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }

  componentDidMount() {
    fetch('/currentMovieData', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
          <MovieOverview data={this.state.data}/>
      </div>
    );
  }
}

export default MovieList;
