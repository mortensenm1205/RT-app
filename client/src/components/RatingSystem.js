import React from 'react';

function convertRating(popularity) {
  let myRating = 0;
  let roundedRating = Math.floor(popularity)
  if(roundedRating >= 0 && roundedRating <= 25) {
    myRating = 1;
    return myRating;
  } else {
    return 'Rating coming soon!'
  }

}

const rating = (props) => {
  return <p>Popularity: {convertRating(props.popularity)}</p>
}

export default rating;
