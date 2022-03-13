import axios from './axios';

const getCategoriesInfo = (categoryType, query = '') => {
  return axios.get(`/categories/${categoryType}${query}`);
};

const createCategoryInfo = (formData) => {
  return axios.post('/categories', formData);
};

const editCategoryInfo = (formData) => {
  return axios.put(`/categories`, formData);
};

const deleteCategoryInfo = (categoryId) => {
  return axios.delete(`/categories/${categoryId}`);
};

export { getCategoriesInfo, createCategoryInfo, editCategoryInfo, deleteCategoryInfo };
