const { Sequelize, DataTypes } = require('sequelize');
const orm = new Sequelize('movielist', 'root', '', {
  dialect: 'mysql'
});

var Movie = orm.define('Movie', {
  title: {
    type: DataTypes.STRING,
    unique: true
  },
  watched: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  }
});

Movie.sync();

exports.Movie = Movie;