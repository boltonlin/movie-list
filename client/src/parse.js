const axios = require('axios');

const Parse = {

  server: 'http://localhost:3000/api/movies',

  create(title) {
    return axios.post(Parse.server, { title });
  },

  getAll() {
    return axios.get(Parse.server)
      .then((response) => response.data);
  },

  getOne(title) {
    return axios.get(Parse.server, { params: { title } })
      .then((response) => response.data);
  },

  update(targetTitle, changes) {
    return axios.patch(Parse.server, {
      target: targetTitle,
      changes,
    });
  },

};

module.exports = Parse;
