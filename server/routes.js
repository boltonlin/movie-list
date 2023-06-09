const router = require('express').Router();
const controller = require('./controllers');

router.get('/movies', controller.movies.get);

router.post('/movies', controller.movies.create);

router.patch('/movies', controller.movies.update);

router.all('*', (req, res) => {
  res.status(404).end();
});

module.exports = router;
