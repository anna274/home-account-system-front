import { expensesTypes } from 'redux/types';

const initialState = {
  data: [],
  loading: false,
  actionRunning: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case expensesTypes.GET_EXPENSES_REQUEST:
      return { ...state, loading: true };
    case expensesTypes.GET_EXPENSES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case expensesTypes.GET_EXPENSES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case expensesTypes.CREATE_EXPENSE_REQUEST:
    case expensesTypes.EDIT_EXPENSE_REQUEST:
    case expensesTypes.DELETE_EXPENSE_REQUEST:
      return { ...state, actionRunning: true };
    case expensesTypes.CREATE_EXPENSE_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        actionRunning: false,
        error: null,
      };
    case expensesTypes.EDIT_EXPENSE_SUCCESS:
      return {
        ...state,
        data: state.data.map(expense => expense.id !== action.payload.id ? expense : action.payload),
        actionRunning: false,
        error: null,
      };
    case expensesTypes.DELETE_EXPENSE_SUCCESS:
      return {
        ...state,
        data: state.data.filter(expense => expense.id !== action.payload),
        actionRunning: false,
        error: null,
      };
    case expensesTypes.CREATE_EXPENSE_FAILURE:
    case expensesTypes.EDIT_EXPENSE_FAILURE:
    case expensesTypes.DELETE_EXPENSE_FAILURE:
      return { ...state, error: action.payload, actionRunning: false };
    case expensesTypes.CLEAR_EXPENSES:
      return { ...state, data: [] };
    default:
      return state;
  }
};
