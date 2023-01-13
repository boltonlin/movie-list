import React, { useState } from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = ({movies, onToggle}) => (
  <ul className="movielist">
    {movies.map(movie => (
      <MovieEntry title={movie.title} watched={movie.watched} onToggle={onToggle} key={movie.title} />
    ))}
  </ul>
);

export default MovieList;