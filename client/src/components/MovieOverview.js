import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Rating from './RatingSystem';

class MovieOverview extends Component {


  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((apiData) => {
          return (
            <div key={apiData.id}>
              <Link to={'/' + apiData.id}>
                <h3>{apiData.title}</h3>
              </Link>
              <p>Overview: {apiData.overview}</p>
              <Rating popularity={apiData.popularity} />
            </div>
          )
        })}
      </div>
    )
  }
}


export default MovieOverview;
