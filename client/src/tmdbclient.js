const axios = require('axios');
const { tmdbkey } = require('../env/config');

const TmdbClient = {

  server: 'https://api.themoviedb.org/3',

  search(title) {
    return axios.get(
      `${TmdbClient.server}/search/movie`,
      {
        params: {
          api_key: tmdbkey,
          query: title,
        },
      },
    ).then((response) => response.data);
  },

};

module.exports = TmdbClient;
