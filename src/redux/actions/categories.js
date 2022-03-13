import {
  getCategoriesInfo,
  createCategoryInfo,
  editCategoryInfo,
  deleteCategoryInfo,
} from 'services';
import { categoriesTypes, modalTypes } from 'redux/types';
import { getQueryString } from 'helpers';

const getCategories = (categoryType, query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: categoriesTypes.GET_CATEGORIES_REQUEST,
        payload: categoryType,
      });
      const categories = await getCategoriesInfo(categoryType.toLowerCase(), getQueryString(query));
      dispatch({
        type: categoriesTypes.GET_CATEGORIES_SUCCESS,
        payload: categories.data,
      });
    } catch (e) {
      dispatch({
        type: categoriesTypes.GET_CATEGORIES_FAILURE,
        payload: e,
      });
    }
  };
};

const createCategory = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: categoriesTypes.CREATE_CATEGORY_REQUEST,
      });
      const account = await createCategoryInfo(formData);
      dispatch({
        type: categoriesTypes.CREATE_CATEGORY_SUCCESS,
        payload: account.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    } catch (e) {
      dispatch({
        type: categoriesTypes.CREATE_CATEGORY_FAILURE,
        payload: e,
      });
    }
  };
};

const editCategory = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: categoriesTypes.EDIT_CATEGORY_REQUEST,
      });
      const account = await editCategoryInfo(formData);
      dispatch({
        type: categoriesTypes.EDIT_CATEGORY_SUCCESS,
        payload: account.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    } catch (e) {
      dispatch({
        type: categoriesTypes.EDIT_CATEGORY_FAILURE,
        payload: e,
      });
    }
  };
};

const deleteCategory = (categoryId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: categoriesTypes.DELETE_CATEGORY_REQUEST,
      });
      await deleteCategoryInfo(categoryId);
      dispatch({
        type: categoriesTypes.DELETE_CATEGORY_SUCCESS,
        payload: categoryId,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    } catch (e) {
      dispatch({
        type: categoriesTypes.DELETE_CATEGORY_FAILURE,
        payload: e,
      });
    }
  };
};

export { getCategories, createCategory, editCategory, deleteCategory };
