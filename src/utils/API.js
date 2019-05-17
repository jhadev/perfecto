import axios from 'axios';

export default {
  getWines: () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}`);
  }
};
