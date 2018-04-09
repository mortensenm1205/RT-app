import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieOverview extends Component {


  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((apiData) => {
          return (
            <div key={apiData.id}>
              <Link to='/user'>
                <h3>{apiData.title}</h3>
              </Link>
              <p>Overview: {apiData.overview}</p>
              <p>Popularity: {apiData.popularity}</p>
            </div>
          )
        })}
      </div>
    )
  }
}


export default MovieOverview;
