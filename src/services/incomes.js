import axios from 'axios';

const getIncomesInfo = (accountId) => {
  return axios.get(`/incomes/${accountId}`);
}

const createIncomeInfo = (formData) => {
  return axios.post('/incomes', formData);
}

const editIncomeInfo = (formData) => {
  return axios.put(`/incomes`, formData);
}

const deleteIncomeInfo = (incomeId) => {
  return axios.delete(`/incomes/${incomeId}`);
}

export { getIncomesInfo, createIncomeInfo, editIncomeInfo, deleteIncomeInfo }