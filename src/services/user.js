import axios from 'axios';

const registerUserInfo = (userData) => {
  return axios.post('/registration', userData);
}

const loginUserInfo = (userData) => {
  return axios.post('/login', userData);
}

export { registerUserInfo, loginUserInfo }

