import axios from 'axios';

export default {
  healthcheck: function () {
    return axios.get('/healthcheck').catch((err) => {
      throw err;
    });
  },
  createUser: function (user) {
    return axios.post('/auth/user', user).catch((err) => {
      throw err;
    });
  },
  authenticate: function (user) {
    return axios.post(`/auth/authenticate`, user).catch((err) => {
      throw err;
    });
  },
};
