import { getBankAccountsInfo, createBankAccountInfo, editBankAccountInfo, deleteBankAccountInfo } from 'services'
import { bankAccountsTypes, modalTypes } from 'redux/types'

const getBankAccounts = (accountId) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: bankAccountsTypes.GET_BANK_ACCOUNTS_REQUEST,
      });
      const bankAccounts = await getBankAccountsInfo(accountId);
      dispatch({
        type: bankAccountsTypes.GET_BANK_ACCOUNTS_SUCCESS,
        payload: bankAccounts.data,
      });
    }catch(e) {
      dispatch({
        type: bankAccountsTypes.GET_BANK_ACCOUNTS_FAILURE,
        payload: e,
      });
    }
  };
}

const createBankAccount = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: bankAccountsTypes.CREATE_BANK_ACCOUNT_REQUEST,
      });
      const account = await createBankAccountInfo(formData);
      dispatch({
        type: bankAccountsTypes.CREATE_BANK_ACCOUNT_SUCCESS,
        payload: account.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: bankAccountsTypes.CREATE_BANK_ACCOUNT_FAILURE,
        payload: e,
      });
    }
  };
}

const editBankAccount = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: bankAccountsTypes.EDIT_BANK_ACCOUNT_REQUEST,
      });
      const account = await editBankAccountInfo(formData);
      dispatch({
        type: bankAccountsTypes.EDIT_BANK_ACCOUNT_SUCCESS,
        payload: account.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: bankAccountsTypes.EDIT_BANK_ACCOUNT_FAILURE,
        payload: e,
      });
    }
  };
}

const deleteBankAccount = (bankAccountId) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: bankAccountsTypes.DELETE_BANK_ACCOUNT_REQUEST,
      });
      await deleteBankAccountInfo(bankAccountId);
      dispatch({
        type: bankAccountsTypes.DELETE_BANK_ACCOUNT_SUCCESS,
        payload: bankAccountId,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: bankAccountsTypes.DELETE_BANK_ACCOUNT_FAILURE,
        payload: e,
      });
    }
  };
}

export { getBankAccounts, createBankAccount, editBankAccount, deleteBankAccount };
