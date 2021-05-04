import { getExpensesInfo, createExpenseInfo, editExpenseInfo, deleteExpenseInfo } from 'services'
import { expensesTypes, modalTypes } from 'redux/types'

const getExpenses = (accountId) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: expensesTypes.GET_EXPENSES_REQUEST,
      });
      const expenses = await getExpensesInfo(accountId);
      dispatch({
        type: expensesTypes.GET_EXPENSES_SUCCESS,
        payload: expenses.data,
      });
    }catch(e) {
      dispatch({
        type: expensesTypes.GET_EXPENSES_FAILURE,
        payload: e,
      });
    }
  };
}

const createExpense = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: expensesTypes.CREATE_EXPENSE_REQUEST,
      });
      const expense = await createExpenseInfo(formData);
      console.log(expense)
      dispatch({
        type: expensesTypes.CREATE_EXPENSE_SUCCESS,
        payload: expense.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: expensesTypes.CREATE_EXPENSE_FAILURE,
        payload: e,
      });
    }
  };
}

const editExpense = (formData) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: expensesTypes.EDIT_EXPENSE_REQUEST,
      });
      const expense = await editExpenseInfo(formData);
      dispatch({
        type: expensesTypes.EDIT_EXPENSE_SUCCESS,
        payload: expense.data,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: expensesTypes.EDIT_EXPENSE_FAILURE,
        payload: e,
      });
    }
  };
}

const deleteExpense = (expenseId) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: expensesTypes.DELETE_EXPENSE_REQUEST,
      });
      await deleteExpenseInfo(expenseId);
      dispatch({
        type: expensesTypes.DELETE_EXPENSE_SUCCESS,
        payload: expenseId,
      });
      dispatch({
        type: modalTypes.CLOSE_MODAL,
      });
    }catch(e) {
      dispatch({
        type: expensesTypes.DELETE_EXPENSE_FAILURE,
        payload: e,
      });
    }
  };
}

export { getExpenses, createExpense, editExpense, deleteExpense };
