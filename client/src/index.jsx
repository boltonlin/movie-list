import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import MoviesDb from './data/MoviesDb';
import TmdbClient from './tmdbclient';

ReactDOM.render(<App movies={MoviesDb} tmdb={TmdbClient} />, document.getElementById('app'));
