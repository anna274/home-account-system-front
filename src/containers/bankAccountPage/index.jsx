import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccountMember, getAccountMembers, getBankAccounts, showModal } from 'redux/actions';
import Button from '@material-ui/core/Button';
import Table from 'components/table';
import customHistory from 'customHistory';
import { BANK_ACCOUNT_MODAL, CONFIRMATION_MODAL } from 'consts';
import useStyles from '../styles';

const columns = [
  { id: 'name', label: 'Имя', minWidth: 150 },
  {
    id: 'accountMember.id',
    label: 'Владелец',
    minWidth: 170,
  },
];

const BankAccountsPage = () => {
  const { data: bankAccounts, loading } = useSelector(state => state.bankAccounts);
  const { id: accountId } = useSelector(state => state.user.data)
  const { data: accountMembers } = useSelector(state => state.accountMembers)
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getBankAccounts(accountId))
    dispatch(getAccountMembers(accountId))
  }, [dispatch])

  const addHandler = () => {
    if(accountMembers.length === 0) {
      dispatch(showModal({
        modalType: CONFIRMATION_MODAL,
        onConfirm: () => customHistory.push('/members'),
        text: 'Для создания счёта необходимо добавить участников аккаунта. Перейти к добавлению участников?',
        confirmText: 'Да, перейти'
      }))
    } else {
      dispatch(showModal({ modalType: BANK_ACCOUNT_MODAL }))
    }
  }

  const editHandler = (bankAccount) => {
    dispatch(showModal({
      modalType: BANK_ACCOUNT_MODAL,
      isEdit: true,
      bankAccount,
    }))
  }

  const deleteHandler = (bankAccountId) => {
    dispatch(showModal({
      modalType: CONFIRMATION_MODAL,
      onConfirm: () => dispatch(deleteAccountMember(bankAccountId)),
      text: 'Вы уверенны, что хотите удалить счёт? После удаления будет удалена информация о доходах и расходах, привязанных к счёту',
      confirmText: 'Да, удалить счёт'
    }))
  }

  return (
    <div className={classes.page}>
      <Table columns={columns} rows={bankAccounts} deleteHandler={deleteHandler} editHandler={editHandler}/>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={addHandler}
      >
        Добавить счёт
      </Button>
    </div>
  );
}

export default BankAccountsPage;