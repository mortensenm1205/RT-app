import React, { Component } from 'react';


class MovieCard extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [], img: '' };
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
      .then(data => {
        let img = data.poster_path.split('').splice(1).join('');
        this.setState({ data, img })
      })
  }

  render() {

    const { data } = this.state;
    const { img } = this.state;

    return (
      <div>
        <h1>{data.title}</h1>
        <img src={img} alt={img} />
        <p>{data.overview}</p>
        <div>Popularity: {data.popularity}</div>
      </div>
    )
  }
}

export default MovieCard;
