import React from 'react';

const MovieEntry = ({movie}) => (
  <li className={movie.className || ''}>{movie.title}</li>
)

export default MovieEntry;