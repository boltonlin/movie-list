const controller = require('./controllers');
const router = require('express').Router();

router.get('/movies', controller.movies.get);

router.post('/movies', controller.movies.create);

router.put('/movies', controller.movies.update);

router.all('*', (req, res) => {
  res.status(404).end();
});

module.exports = router;