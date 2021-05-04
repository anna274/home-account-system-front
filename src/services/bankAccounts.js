import axios from 'axios';

const getBankAccountsInfo = (accountId) => {
  return axios.get(`/bank-accounts/${accountId}`);
}

const createBankAccountInfo = (formData) => {
  return axios.post('/bank-accounts', formData);
}

const editBankAccountInfo = (formData) => {
  return axios.put(`/bank-accounts`, formData);
}

const deleteBankAccountInfo = (bankAccountId) => {
  return axios.delete(`/bank-accounts/${bankAccountId}`);
}

export { getBankAccountsInfo, createBankAccountInfo, editBankAccountInfo, deleteBankAccountInfo }