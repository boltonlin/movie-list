const axios = require('axios');

const Parse = {

  server: `http://localhost:3000/api/movies`,

  create: function (title) {
    return axios.post(Parse.server, {'title': title});
  },

  getAll: function () {
    return axios.get(Parse.server)
      .then((response) => {
        return response.data;
      });
  },

  getOne: function (title) {
    return axios.get(Parse.server, {params: {title: title}})
      .then((response) => {
        return response.data;
      });
  },

  update: function (targetTitle, changes) {
    return axios.put(Parse.server, {
      'target': targetTitle,
      'changes': changes
    });
  },

}

module.exports = Parse;