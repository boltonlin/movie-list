import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import MoviesDb from './data/MoviesDb.js';
import TmdbClient from './tmdbclient.js';

ReactDOM.render(<App movies={MoviesDb} tmdb={TmdbClient} />, document.getElementById('app'));