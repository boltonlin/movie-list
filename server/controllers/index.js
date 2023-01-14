const Movie = require('../db').Movie;

exports.movies = {

  get: function (req, res) {
    if (!Object.keys(req.query).length) {
      Movie.findAll()
        .then((movies) => {
          if (movies.length) {
            res.status(200).send(movies);
          } else {
            res.status(204).send(movies);
          }
        });
    } else {
      const { title } = req.query;
      Movie.findOne({ where: { 'title': title } })
        .then((movie) => {
          if (movie) {
            res.status(200).send(movie);
          } else {
            res.status(204).send(`Movie ${title} not found.`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },

  create: function (req, res) {
    const { title } = req.body;
    Movie.create( { 'title': title } )
      .then(() => {
        res.status(201).send(`Inserted ${title} into db.`)
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  update: function (req, res) {
    const title = req.body.target;
    Movie.update(req.body.changes, {
      where: {
        'title': title
      }
    }).then(() => {
      res.status(201).send(`Updated ${title} by ${JSON.stringify(req.body.changes)}`);
    }).catch((err) => {
      res.status(400).send(err);
    });
  },

}