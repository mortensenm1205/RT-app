import React from 'react';

function convertRating(popularity) {
  let myRating = 0;
  let roundedRating = Math.floor(popularity)
  if(roundedRating >= 0 && roundedRating <= 25) {
    myRating = 1;
    return myRating;
  } else if(roundedRating >= 26 && roundedRating <= 50) {
    myRating = 2;
    return myRating;
  } else if(roundedRating >= 51 && roundedRating <= 75) {
    myRating = 3;
    return myRating;
  } else if(roundedRating >= 76 && roundedRating <= 100) {
    myRating = 4;
    return myRating;
  } else {
    myRating = 5;
    return myRating;
  }
}

const rating = (props) => {
  return <p>Popularity: {convertRating(props.popularity)}</p>
}

export default rating;
