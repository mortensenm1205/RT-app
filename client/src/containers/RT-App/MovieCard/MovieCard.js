import React, { Component } from 'react';


class MovieCard extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
     fetch('/currentMovieData/:movieId', {
      method: 'post',
      body: JSON.stringify({
        id: this.props.location.pathname
      }),
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }

  render() {

    const { data } = this.state;

    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.overview}</p>
        <div>Popularity: {data.popularity}</div>
        <p>{data.homepage}</p>
      </div>
    )
  }
}

export default MovieCard;
