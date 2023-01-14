import React, { useState, useEffect } from 'react';

//TODO: add toggle button to indicate watched/unwatched
const MovieEntry = ({
  title,
  watched,
  onToggle,
  tmdb
}) => {

  const [showDescription, setShowDescription] = useState(false);
  const [findings, setFindings] = useState({});

  const handleClick = () => {
    setShowDescription(!showDescription);
  }

  useEffect(() => {
    tmdb.search(title)
    .then((results) => {
      console.log(results.results[0]);
      setFindings(results.results[0]);
    });
  }, []);

  return (
    <>
    <li
      className="movie-entry"
      onClick={handleClick}>
      {title}
      <button
        className={'watch-button' +
          (watched ?  ' watched': ' not-watched')}
        onClick={() => {onToggle(title)}}>
          {watched ? 'Watched' : 'Not Watched'}
      </button>
    </li>
    {showDescription ?
      <div className="movie-desc">
        <div className="text-section">
          <p>Released: {findings.release_date}</p>
          <p>{findings.overview}</p>
          <p>User Score: {findings.vote_average * 10}%</p>
        </div>
        <img
        src={`https://image.tmdb.org/t/p/w200${findings.poster_path}`}></img>
      </div>
    : null}
    </>
  );

}
export default MovieEntry;