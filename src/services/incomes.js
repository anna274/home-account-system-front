import axios from 'axios';

const getIncomesInfo = (accountId, queryString) => {
  console.log(`/incomes/${accountId}${queryString}`);
  return axios.get(`/incomes/${accountId}${queryString}`);
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