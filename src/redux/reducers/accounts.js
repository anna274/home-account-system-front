import { accountsTypes } from 'redux/types';

const initialState = {
  data: [],
  loading: false,
  actionRunning: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case accountsTypes.GET_ACCOUNTS_REQUEST:
      return { ...state, loading: true };
    case accountsTypes.GET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case accountsTypes.GET_ACCOUNTS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case accountsTypes.CREATE_ACCOUNTS_REQUEST:
      return { ...state, actionRunning: true };
    case accountsTypes.CREATE_ACCOUNTS_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        actionRunning: false,
        error: null,
      };
    case accountsTypes.CREATE_ACCOUNTS_FAILURE:
      return { ...state, error: action.payload, actionRunning: false };
    default:
      return state;
  }
};
