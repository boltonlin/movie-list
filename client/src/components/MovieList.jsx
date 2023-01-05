import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = ({movies}) => (
  <ul className="movielist">
    {movies.map(movie => (
      <MovieEntry movie={movie} />
    ))}
  </ul>
)

export default MovieList;