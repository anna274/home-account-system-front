import axios from './axios';

const registerUserInfo = (userData) => {
  axios.defaults.withCredentials = true;
  return axios.post('/registration', userData, {
    withCredentials: true,
  });
};

const loginUserInfo = async (userData) => {
  axios.defaults.withCredentials = true;
  return axios.post('/login', userData, {
    withCredentials: true,
  });
};

export { registerUserInfo, loginUserInfo };
