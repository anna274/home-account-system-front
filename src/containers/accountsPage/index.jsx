import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount, getAccounts, showModal } from 'redux/actions';
import Button from '@material-ui/core/Button';
import Table from 'components/table';
import { ACCOUNT_MODAL, CONFIRMATION_MODAL } from 'consts';
import useStyles from '../styles';

const columns = [
  { id: 'login', label: 'Логин', minWidth: 150 },
  {
    id: 'roles',
    label: 'Роли',
    minWidth: 170,
    format: (value) => value.join(', '),
  },
];

const AccountsPage = () => {
  const { data: accounts } = useSelector((state) => state.accounts);
  const userId = useSelector((state) => state.user.data.id);
  const dispatch = useDispatch();
  const classes = useStyles();
  const sortedAccounts = accounts.filter((account) => account.id !== userId);

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  const editHandler = (account) => {
    dispatch(
      showModal({
        modalType: ACCOUNT_MODAL,
        isEdit: true,
        account,
      }),
    );
  };

  const deleteHandler = (accountId) => {
    dispatch(
      showModal({
        modalType: CONFIRMATION_MODAL,
        onConfirm: () => dispatch(deleteAccount(accountId)),
        text: 'Вы уверенны, что хотите удалить аккаунт?',
        confirmText: 'Да, удалить аккаунт',
      }),
    );
  };

  return (
    <div className={classes.page}>
      <Table
        columns={columns}
        rows={sortedAccounts}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={() => dispatch(showModal({ modalType: ACCOUNT_MODAL }))}
      >
        Создать аккаунт
      </Button>
    </div>
  );
};

export default AccountsPage;
