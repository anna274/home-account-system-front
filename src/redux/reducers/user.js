import { userTypes } from 'redux/types';

const initialState = {
  data: {},
  loading: false,
  error: null,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOGIN_USER_REQUEST:        
    case userTypes.REGISTER_USER_REQUEST:
      return { ...state, loading: true };
    case userTypes.LOGIN_USER_SUCCESS:
    case userTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
      case userTypes.REGISTER_USER_FAILURE:
    case userTypes.LOGIN_USER_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
