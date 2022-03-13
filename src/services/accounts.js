import axios from './axios';

const getAccountsInfo = () => {
  return axios.get('/accounts');
};

const createAccountInfo = (formData) => {
  return axios.post('/accounts', formData);
};

const editAccountInfo = (formData) => {
  return axios.put(`/accounts`, formData);
};

const editAccountPasswordInfo = (formData) => {
  return axios.patch(`/accounts/password`, formData);
};

const deleteAccountInfo = (accountId) => {
  return axios.delete(`/accounts/${accountId}`);
};

export {
  getAccountsInfo,
  createAccountInfo,
  editAccountInfo,
  deleteAccountInfo,
  editAccountPasswordInfo,
};
