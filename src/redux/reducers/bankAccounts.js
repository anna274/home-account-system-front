import { bankAccountsTypes } from 'redux/types';

const initialState = {
  data: [],
  loading: false,
  actionRunning: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case bankAccountsTypes.GET_BANK_ACCOUNTS_REQUEST:
      return { ...state, loading: true };
    case bankAccountsTypes.GET_BANK_ACCOUNTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case bankAccountsTypes.GET_BANK_ACCOUNTS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case bankAccountsTypes.CREATE_BANK_ACCOUNT_REQUEST:
    case bankAccountsTypes.EDIT_BANK_ACCOUNT_REQUEST:
    case bankAccountsTypes.DELETE_BANK_ACCOUNT_REQUEST:
      return { ...state, actionRunning: true };
    case bankAccountsTypes.CREATE_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        actionRunning: false,
        error: null,
      };
    case bankAccountsTypes.EDIT_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        data: state.data.map(bankAccount => bankAccount.id !== action.payload.id ? bankAccount : action.payload),
        actionRunning: false,
        error: null,
      };
    case bankAccountsTypes.DELETE_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        data: state.data.filter(bankAccount => bankAccount.id !== action.payload),
        actionRunning: false,
        error: null,
      };
    case bankAccountsTypes.CREATE_BANK_ACCOUNT_FAILURE:
    case bankAccountsTypes.EDIT_BANK_ACCOUNT_FAILURE:
    case bankAccountsTypes.DELETE_BANK_ACCOUNT_FAILURE:
      return { ...state, error: action.payload, actionRunning: false };
    default:
      return state;
  }
};
