import { getAccountMembersInfo, createAccountMemberInfo, editAccountMemberInfo, deleteAccountMemberInfo } from 'services'
import { accountMembersTypes, modalTypes } from 'redux/types'

const getAccountMembers = (accountId) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: accountMembersTypes.GET_ACCOUNT_MEMBERS_REQUEST,
      });
      const accountMembers = await getAccountMembersInfo(accountId);
      dispatch({
        type: accountMembersTypes.GET_ACCOUNT_MEMBERS_SUCCESS,
        payload: accountMembers.data,
      });
    }catch(e) {
      dispatch({
        type: accountMembersTypes.GET_ACCOUNT_MEMBERS_FAILURE,
        payload: e,
      });
    }
  };
}

const createAccountMember = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: accountMembersTypes.CREATE_ACCOUNT_MEMBER_REQUEST,
      });
      const account = await createAccountMemberInfo(formData);
      dispatch({
        type: accountMembersTypes.CREATE_ACCOUNT_MEMBER_SUCCESS,
        payload: account.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: accountMembersTypes.CREATE_ACCOUNT_MEMBER_FAILURE,
        payload: e,
      });
    }
  };
}

const editAccountMember = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: accountMembersTypes.EDIT_ACCOUNT_MEMBER_REQUEST,
      });
      const account = await editAccountMemberInfo(formData);
      dispatch({
        type: accountMembersTypes.EDIT_ACCOUNT_MEMBER_SUCCESS,
        payload: account.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: accountMembersTypes.EDIT_ACCOUNT_MEMBER_FAILURE,
        payload: e,
      });
    }
  };
}

const deleteAccountMember = (accountMemberId) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: accountMembersTypes.DELETE_ACCOUNT_MEMBER_REQUEST,
      });
      await deleteAccountMemberInfo(accountMemberId);
      dispatch({
        type: accountMembersTypes.DELETE_ACCOUNT_MEMBER_SUCCESS,
        payload: accountMemberId,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: accountMembersTypes.DELETE_ACCOUNT_MEMBER_FAILURE,
        payload: e,
      });
    }
  };
}

export { getAccountMembers, createAccountMember, editAccountMember, deleteAccountMember };
