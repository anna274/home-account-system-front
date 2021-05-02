import { categoriesTypes } from 'redux/types';
import { EXPENSE_CATEGORY } from 'consts';
const initialState = {
  data: [],
  loading: false,
  actionRunning: false,
  error: null,
  type: EXPENSE_CATEGORY
};

export default (state = initialState, action) => {
  switch (action.type) {
    case categoriesTypes.GET_CATEGORIES_REQUEST:
      return { ...state, loading: true, type: action.payload };
    case categoriesTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case categoriesTypes.GET_CATEGORIES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case categoriesTypes.CREATE_CATEGORY_REQUEST:
    case categoriesTypes.EDIT_CATEGORY_REQUEST:
    case categoriesTypes.DELETE_CATEGORY_REQUEST:
      return { ...state, actionRunning: true };
    case categoriesTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        actionRunning: false,
        error: null,
      };
    case categoriesTypes.EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        data: state.data.map(category => category.id !== action.payload.id ? category : action.payload),
        actionRunning: false,
        error: null,
      };
    case categoriesTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        data: state.data.filter(category => category.id !== action.payload),
        actionRunning: false,
        error: null,
      };
    case categoriesTypes.CREATE_CATEGORY_FAILURE:
    case categoriesTypes.EDIT_CATEGORY_FAILURE:
    case categoriesTypes.DELETE_CATEGORY_FAILURE:
      return { ...state, error: action.payload, actionRunning: false };
    default:
      return state;
  }
};
