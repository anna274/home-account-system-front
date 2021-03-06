import { getIncomesInfo, createIncomeInfo, editIncomeInfo, deleteIncomeInfo } from 'services'
import { incomesTypes, modalTypes } from 'redux/types'
import { getQueryString } from 'helpers'

const getIncomes = (accountId, query = {}) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: incomesTypes.GET_INCOMES_REQUEST,
      });
      const incomes = await getIncomesInfo(accountId, getQueryString(query));
      dispatch({
        type: incomesTypes.GET_INCOMES_SUCCESS,
        payload: incomes.data,
      });
    }catch(e) {
      dispatch({
        type: incomesTypes.GET_INCOMES_FAILURE,
        payload: e,
      });
    }
  };
}

const createIncome = (formData) => {
  console.log(formData)
  return async (dispatch) => {
    try{
      dispatch({
        type: incomesTypes.CREATE_INCOME_REQUEST,
      });
      const income = await createIncomeInfo(formData);
      console.log(income)
      dispatch({
        type: incomesTypes.CREATE_INCOME_SUCCESS,
        payload: income.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: incomesTypes.CREATE_INCOME_FAILURE,
        payload: e,
      });
    }
  };
}

const editIncome = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: incomesTypes.EDIT_INCOME_REQUEST,
      });
      const income = await editIncomeInfo(formData);
      dispatch({
        type: incomesTypes.EDIT_INCOME_SUCCESS,
        payload: income.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: incomesTypes.EDIT_INCOME_FAILURE,
        payload: e,
      });
    }
  };
}

const deleteIncome = (incomeId) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: incomesTypes.DELETE_INCOME_REQUEST,
      });
      await deleteIncomeInfo(incomeId);
      dispatch({
        type: incomesTypes.DELETE_INCOME_SUCCESS,
        payload: incomeId,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: incomesTypes.DELETE_INCOME_FAILURE,
        payload: e,
      });
    }
  };
}

const clearIncomes = () => {
  return {
    type: incomesTypes.CLEAR_INCOMES,
  }
}

export { getIncomes, createIncome, editIncome, deleteIncome, clearIncomes };
