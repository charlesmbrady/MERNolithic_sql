import axios from 'axios';

export default {
  healthcheck: function() {
    return axios.get('/healthcheck').catch(err => {
      throw err;
    });
  },
  checkDatabase: function() {
    return axios.get('/auth/users').catch(err => {
      throw err;
    });
  }
};
