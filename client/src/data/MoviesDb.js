const Parse = require('../parse.js');

const MoviesDb = {
  get: function (title) {
    if (!title) {
      return Parse.getAll();
    } else {
      return Parse.getOne(title);
    }
  },

  filter: function (filter) {
    return Parse.getAll()
      .then((movies) => {
        return movies.filter(filter);
      })
  },

  add: function (title) {
    return Parse.create(title);
  },

  updateWatched: function (targetTitle) {
    return Parse.getOne(targetTitle)
      .then((movie) => {
        if (movie.watched) {
          return Parse.update(targetTitle, {watched: 0});
        } else {
          return Parse.update(targetTitle, {watched: 1});
        }
      });
  }

}

export default MoviesDb;