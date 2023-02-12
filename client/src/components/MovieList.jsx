import React from 'react';
import MovieEntry from './MovieEntry.jsx';

function MovieList({
  movies,
  onToggle,
  tmdb,
}) {
  return (
    <ul className="movielist">
      {movies.map((movie) => (
        <MovieEntry
          title={movie.title}
          watched={movie.watched}
          onToggle={onToggle}
          tmdb={tmdb}
          key={movie.title}
        />
      ))}
    </ul>
  );
}

export default MovieList;
