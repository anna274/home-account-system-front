import axios from 'axios';

const getExpensesInfo = (accountId) => {
  return axios.get(`/expenses/${accountId}`);
}

const createExpenseInfo = (formData) => {
  return axios.post('/expenses', formData);
}

const editExpenseInfo = (formData) => {
  return axios.put(`/expenses`, formData);
}

const deleteExpenseInfo = (expenseId) => {
  return axios.delete(`/expenses/${expenseId}`);
}

export { getExpensesInfo, createExpenseInfo, editExpenseInfo, deleteExpenseInfo }