import React, { useState } from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = ({movies}) => (
  <ul className="movielist">
    {movies.map(movie => (
      <MovieEntry title={movie.title} key={movie.title} />
    ))}
  </ul>
);

export default MovieList;