import axios from 'axios';

const getAccountsInfo = () => {
  return axios.get('/accounts');
}

const createAccountInfo = (formData) => {
  return axios.post('/accounts', formData);
}

const editAccountInfo = (accountId, formData) => {
  return axios.put(`/accounts/${accountId}`, formData);
}

const deleteAccountInfo = (accountId) => {
  return axios.delete(`/accounts/${accountId}`);
}

export { getAccountsInfo, createAccountInfo, editAccountInfo, deleteAccountInfo }