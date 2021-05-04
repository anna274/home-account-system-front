import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense, getExpenses, getCategories, getBankAccounts, showModal } from 'redux/actions';
import Button from '@material-ui/core/Button';
import Table from 'components/table';
import customHistory from 'customHistory';
import { EXPENSES_MODAL, CONFIRMATION_MODAL, EXPENSE_CATEGORY } from 'consts';
import { formatDateString } from 'helpers';
import useStyles from '../styles';

const columns = [
  {
    id: 'category',
    label: 'Категория',
    minWidth: 170,
    format: value => value.name
  },
  {
    id: 'bankAccount',
    label: 'Счёт',
    minWidth: 170,
    format: value => value.name
  },
  {
    id: 'sum',
    label: 'Сумма (руб)',
    minWidth: 170,
  },
  {
    id: 'date',
    label: 'Дата',
    minWidth: 170,
    format: value => formatDateString(value)
  },
];

const ExpensesPage = () => {
  const { data: expenses } = useSelector(state => state.expenses);
  const { data: bankAccounts } = useSelector(state => state.bankAccounts);
  const { id: accountId } = useSelector(state => state.user.data)
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getBankAccounts(accountId))
    dispatch(getCategories(EXPENSE_CATEGORY))
    dispatch(getExpenses(accountId))
  }, [dispatch])

  const addHandler = () => {
    if(bankAccounts.length === 0) {
      dispatch(showModal({
        modalType: CONFIRMATION_MODAL,
        onConfirm: () => customHistory.push('/bank-accounts'),
        text: 'Для добавления записи о расходе необходимо добавить счета, которые будут привязываться в записи о расходе. Перейти к добавлению счетов?',
        confirmText: 'Да, перейти'
      }))
    } else {
      dispatch(showModal({ modalType: EXPENSES_MODAL }))
    }
  }

  const editHandler = (expense) => {
    dispatch(showModal({
      modalType: EXPENSES_MODAL,
      isEdit: true,
      expense,
    }))
  }

  const deleteHandler = (expenseId) => {
    dispatch(showModal({
      modalType: CONFIRMATION_MODAL,
      onConfirm: () => dispatch(deleteExpense(expenseId)),
      text: 'Вы уверенны, что хотите удалить запись?',
      confirmText: 'Да, удалить'
    }))
  }

  return (
    <div className={classes.page}>
      <Table columns={columns} rows={expenses} deleteHandler={deleteHandler} editHandler={editHandler}/>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={addHandler}
      >
        Добавить запись о расходе
      </Button>
    </div>
  );
}

export default ExpensesPage;