import { getAccountsInfo, createAccountInfo, editAccountInfo, deleteAccountInfo } from 'services'
import { accountsTypes, modalTypes } from 'redux/types'

const getAccounts = () => {
  return async (dispatch) => {
    try{
      dispatch({
        type: accountsTypes.GET_ACCOUNTS_REQUEST,
      });
      const accounts = await getAccountsInfo();
      dispatch({
        type: accountsTypes.GET_ACCOUNTS_SUCCESS,
        payload: accounts.data.content,
      });
    }catch(e) {
      dispatch({
        type: accountsTypes.GET_ACCOUNTS_FAILURE,
        payload: e,
      });
    }
  };
}

const createAccount = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: accountsTypes.CREATE_ACCOUNTS_REQUEST,
      });
      const account = await createAccountInfo(formData);
      dispatch({
        type: accountsTypes.CREATE_ACCOUNTS_SUCCESS,
        payload: account.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: accountsTypes.CREATE_ACCOUNTS_FAILURE,
        payload: e,
      });
    }
  };
}

export { getAccounts, createAccount };