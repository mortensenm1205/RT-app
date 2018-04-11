import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Rating from './RatingSystem';

const MovieOverview = (props) => {

    return (
      <div>
        {props.data.map((apiData) => {
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


export default MovieOverview;
