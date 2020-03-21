import axios from 'axios';

export default {
  healthcheck: function() {
    return axios.get('/healthcheck').catch(err => {
      throw err;
    });
  }
};
