import { accountMembersTypes } from 'redux/types';

const initialState = {
  data: [],
  loading: false,
  actionRunning: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case accountMembersTypes.GET_ACCOUNT_MEMBERS_REQUEST:
      return { ...state, loading: true };
    case accountMembersTypes.GET_ACCOUNT_MEMBERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case accountMembersTypes.GET_ACCOUNT_MEMBERS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case accountMembersTypes.CREATE_ACCOUNT_MEMBER_REQUEST:
    case accountMembersTypes.EDIT_ACCOUNT_MEMBER_REQUEST:
    case accountMembersTypes.DELETE_ACCOUNT_MEMBER_REQUEST:
      return { ...state, actionRunning: true };
    case accountMembersTypes.CREATE_ACCOUNT_MEMBER_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        actionRunning: false,
        error: null,
      };
    case accountMembersTypes.EDIT_ACCOUNT_MEMBER_SUCCESS:
      return {
        ...state,
        data: state.data.map(accountMember => accountMember.id !== action.payload.id ? accountMember : action.payload),
        actionRunning: false,
        error: null,
      };
    case accountMembersTypes.DELETE_ACCOUNT_MEMBER_SUCCESS:
      return {
        ...state,
        data: state.data.filter(accountMember => accountMember.id !== action.payload),
        actionRunning: false,
        error: null,
      };
    case accountMembersTypes.CREATE_ACCOUNT_MEMBER_FAILURE:
    case accountMembersTypes.EDIT_ACCOUNT_MEMBER_FAILURE:
    case accountMembersTypes.DELETE_ACCOUNT_MEMBER_FAILURE:
      return { ...state, error: action.payload, actionRunning: false };
    default:
      return state;
  }
};
