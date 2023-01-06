import React from 'react';

//TODO: add toggle button to indicate watched/unwatched
const MovieEntry = ({title}) => {
  return (
    <li>
      {title}
      {/* <button className="watch-button"
        onClick={()=>{handleToggle(movie)}}>
          {movie.watched ? 'Watched' : 'Not Watched'}
      </button> */}
    </li>
  );

}
export default MovieEntry;