const _ = require('underscore');

const Movies = {

  _list: [],

  add(title) {
    if (!Movies.has(title)) {
      Movies._list.push({ title });
      return true;
    } return false;
  },

  has(title) {
    if (Movies._list.some((movie) => movie.title === title)) return true;
    return false;
  },

  get(title) {
    if (!title) {
      return Movies._list;
    }
    for (const movie of Movies._list) {
      if (movie.title === title) {
        return movie;
      }
    }
    console.log('Couldn\'t find movie with that title');
    return undefined;
  },

  extend(targetTitle, obj) {
    _.extend(Movies.get(targetTitle), obj);
    console.log(Movies.get(targetTitle));
  },

  length() {
    return Movies._list.length;
  },

  filter(filter) {
    return Movies._list.filter(filter);
  },

};

export default Movies;
