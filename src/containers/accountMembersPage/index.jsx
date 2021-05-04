import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccountMember, getAccountMembers, showModal } from 'redux/actions';
import Button from '@material-ui/core/Button';
import Table from 'components/table';
import { ACCOUNT_MEMBER_MODAL, CONFIRMATION_MODAL } from 'consts';
import useStyles from '../styles';

const columns = [
  { id: 'name', label: 'Имя', minWidth: 150 },
];

const AccountMembersPage = () => {
  const { data: accountMembers, loading } = useSelector(state => state.accountMembers);
  const { id: accountId } = useSelector(state => state.user.data)
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAccountMembers(accountId))
  }, [dispatch])

  const editHandler = (accountMember) => {
    dispatch(showModal({
      modalType: ACCOUNT_MEMBER_MODAL,
      isEdit: true,
      accountMember,
    }))
  }

  const deleteHandler = (accountMemberId) => {
    dispatch(showModal({
      modalType: CONFIRMATION_MODAL,
      onConfirm: () => dispatch(deleteAccountMember(accountMemberId)),
      text: 'Вы уверенны, что хотите удалить участника аккаунта?',
      confirmText: 'Да, удалить участника'
    }))
  }

  return (
    <div className={classes.page}>
      <Table columns={columns} rows={accountMembers} deleteHandler={deleteHandler} editHandler={editHandler}/>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={() => dispatch(showModal({ modalType: ACCOUNT_MEMBER_MODAL }))}
      >
        Добавить участника
      </Button>
    </div>
  );
}

export default AccountMembersPage;