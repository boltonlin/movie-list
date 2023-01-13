var _ = require('underscore');

const Movies = {

  _list: [],

  add: function (title) {
    if (!Movies.has(title)) {
      Movies._list.push({title: title});
      return true;
    } else return false;
  },

  has: function (title) {
    if (Movies._list.some(movie => movie.title === title)) return true;
    else return false;
  },

  get: function (title) {
    if (!title) {
      return Movies._list;
    } else {
      for (const movie of Movies._list) {
        if (movie.title === title) {
          return movie;
        }
      }
      console.log(`Couldn't find movie with that title`);
      return undefined;
    }
  },

  extend: function (targetTitle, obj) {
    _.extend(Movies.get(targetTitle), obj);
    console.log(Movies.get(targetTitle));
  },

  length: function () {
    return Movies._list.length;
  },

  filter: function (filter) {
    return Movies._list.filter(filter);
  },

}

export default Movies;