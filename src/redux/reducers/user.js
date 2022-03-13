import { userTypes } from 'redux/types';

// const initialState = {
//   data: {
//     id: '10',
//     password:'$2a$10$H/p1S7Xp0tDA/PcYk0swRu…H8qcA3n7u',
//     username:'test100500',
//     authorities:['USER']
//   },
//   loading: false,
//   error: null,
//   isAuthenticated: true,
//   actionRunning: false,
// };

const initialState = {
  data: {},
  loading: false,
  error: null,
  isAuthenticated: false,
  actionRunning: false,
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
        data: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case userTypes.REGISTER_USER_FAILURE:
    case userTypes.LOGIN_USER_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case userTypes.EDIT_USER_REQUEST:
      return { ...state, actionRunning: true };
    case userTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        actionRunning: false,
        data: action.payload,
        error: null,
      };
    case userTypes.EDIT_USER_FAILURE:
      return { ...state, error: action.payload, actionRunning: false };

    case userTypes.LOGOUT_USER_SUCCESS:
      return { ...state, data: {}, isAuthenticated: false };
    default:
      return state;
  }
};
