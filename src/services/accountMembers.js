import axios from './axios';

const getAccountMembersInfo = (accountId) => {
  return axios.get(`/account-members/${accountId}`);
};

const createAccountMemberInfo = (formData) => {
  return axios.post('/account-members', formData);
};

const editAccountMemberInfo = (formData) => {
  return axios.put(`/account-members`, formData);
};

const deleteAccountMemberInfo = (accountMemberId) => {
  return axios.delete(`/account-members/${accountMemberId}`);
};

export {
  getAccountMembersInfo,
  createAccountMemberInfo,
  editAccountMemberInfo,
  deleteAccountMemberInfo,
};
