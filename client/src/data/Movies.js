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

  get: function () {
    return Movies._list;
  },

  length: function () {
    return Movies._list.length;
  },

  filter: function (filter) {
    return Movies._list.filter(filter);
  },

}

export default Movies;