import axios from 'axios';

const config = {
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://192.168.47.107:8080'
      : process.env.REACT_APP_API_URL,
};

export default axios.create(config);
