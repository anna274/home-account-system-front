import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteIncome, getIncomes, getCategories, getBankAccounts, showModal } from 'redux/actions';
import Button from '@material-ui/core/Button';
import Table from 'components/table';
import customHistory from 'customHistory';
import { INCOMES_MODAL, CONFIRMATION_MODAL, INCOME_CATEGORY, incomeExpenseColumns } from 'consts';
import useStyles from '../styles';

const IncomesPage = () => {
  const { data: incomes } = useSelector(state => state.incomes);
  const { data: bankAccounts } = useSelector(state => state.bankAccounts);
  const { id: accountId } = useSelector(state => state.user.data)
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getBankAccounts(accountId))
    dispatch(getCategories(INCOME_CATEGORY))
    dispatch(getIncomes(accountId))
  }, [dispatch])

  const addHandler = () => {
    if(bankAccounts.length === 0) {
      dispatch(showModal({
        modalType: CONFIRMATION_MODAL,
        onConfirm: () => customHistory.push('/bank-accounts'),
        text: 'Для добавления записи о доходе необходимо добавить счета, которые будут привязываться в записи о доходе. Перейти к добавлению счетов?',
        confirmText: 'Да, перейти'
      }))
    } else {
      dispatch(showModal({ modalType: INCOMES_MODAL }))
    }
  }

  const editHandler = (income) => {
    dispatch(showModal({
      modalType: INCOMES_MODAL,
      isEdit: true,
      income,
    }))
  }

  const deleteHandler = (incomeId) => {
    dispatch(showModal({
      modalType: CONFIRMATION_MODAL,
      onConfirm: () => dispatch(deleteIncome(incomeId)),
      text: 'Вы уверенны, что хотите удалить запись?',
      confirmText: 'Да, удалить'
    }))
  }

  return (
    <div className={classes.page}>
      <Table columns={incomeExpenseColumns} rows={incomes} deleteHandler={deleteHandler} editHandler={editHandler}/>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={addHandler}
      >
        Добавить запись о доходе
      </Button>
    </div>
  );
}

export default IncomesPage;