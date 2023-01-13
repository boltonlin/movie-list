import React, { useState } from 'react';

//TODO: add toggle button to indicate watched/unwatched
const MovieEntry = ({
  title,
  watched,
  onToggle
}) => {

  return (
    <li>
      {title}
      <button
        className={'watch-button' +
          (watched ?  ' watched': ' not-watched')}
        onClick={() => {onToggle(title)}}>
          {watched ? 'Watched' : 'Not Watched'}
      </button>
    </li>
  );

}
export default MovieEntry;