import { incomesTypes } from 'redux/types';

const initialState = {
  data: [],
  loading: false,
  actionRunning: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case incomesTypes.GET_INCOMES_REQUEST:
      return { ...state, loading: true };
    case incomesTypes.GET_INCOMES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case incomesTypes.GET_INCOMES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case incomesTypes.CREATE_INCOME_REQUEST:
    case incomesTypes.EDIT_INCOME_REQUEST:
    case incomesTypes.DELETE_INCOME_REQUEST:
      return { ...state, actionRunning: true };
    case incomesTypes.CREATE_INCOME_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        actionRunning: false,
        error: null,
      };
    case incomesTypes.EDIT_INCOME_SUCCESS:
      return {
        ...state,
        data: state.data.map((income) =>
          income.id !== action.payload.id ? income : action.payload,
        ),
        actionRunning: false,
        error: null,
      };
    case incomesTypes.DELETE_INCOME_SUCCESS:
      return {
        ...state,
        data: state.data.filter((income) => income.id !== action.payload),
        actionRunning: false,
        error: null,
      };
    case incomesTypes.CREATE_INCOME_FAILURE:
    case incomesTypes.EDIT_INCOME_FAILURE:
    case incomesTypes.DELETE_INCOME_FAILURE:
      return { ...state, error: action.payload, actionRunning: false };
    case incomesTypes.CLEAR_INCOMES:
      return { ...state, data: [] };
    default:
      return state;
  }
};
