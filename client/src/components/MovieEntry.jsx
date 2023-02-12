import React, { useState, useEffect } from 'react';

// TODO: add toggle button to indicate watched/unwatched
function MovieEntry({
  title,
  watched,
  onToggle,
  tmdb,
}) {
  const [showDescription, setShowDescription] = useState(false);
  const [findings, setFindings] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.className.includes('movie-entry')) {
      setShowDescription(!showDescription);
    } else if (e.target.className.includes('watch-button')) {
      onToggle(title);
    }
  };

  useEffect(() => {
    tmdb.search(`${title}`)
      .then((results) => {
        setFindings(results.results[0]);
      });
  }, []);

  return (
    <>
      <li
        className="movie-entry"
        onClick={(e) => handleClick(e)}
      >
        {title}
        <button
          className={`watch-button${
            watched ? ' watched' : ' not-watched'}`}
          type="button"
        >
          {watched ? 'Watched' : 'Not Watched'}
        </button>
      </li>
      {showDescription && findings
        ? (
          <div className="movie-desc">
            <div className="text-section">
              {findings
                ? (
                  <>
                    <p>
                      Released:
                      {findings.release_date}
                    </p>
                    <p>{findings.overview}</p>
                    <p>
                      User Score:
                      {findings.vote_average * 10}
                      %
                    </p>
                  </>
                )
                : <p>No description found.</p>}
            </div>
            <img
              alt="asdf"
              src={`https://image.tmdb.org/t/p/w200${findings.poster_path}`}
            />
          </div>
        )
        : null}
    </>
  );
}
export default MovieEntry;
