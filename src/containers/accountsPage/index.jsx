import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount, getAccounts, showModal } from 'redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { ACCOUNT_MODAL, CONFIRMATION_MODAL } from 'consts';
import { modalTypes } from '../../redux/types';

const columns = [
  { id: 'login', label: 'Логин', minWidth: 150 },
  {
    id: 'roles',
    label: 'Роли',
    minWidth: 170,
    format: (value) => value.join(', '),
  },
];

const useStyles = makeStyles({
  page: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  root: {
    marginTop: '5rem',
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  addButton: {
    marginTop: '1rem',
  }
});

const AccountsPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data: accounts, loading } = useSelector(state => state.accounts);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAccounts())
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editHandler = (account) => {
    dispatch(showModal({
      modalType: ACCOUNT_MODAL,
      isEdit: true,
      account,
    }))
  }

  const deleteHandler = (accountId) => {
    dispatch(showModal({
      modalType: CONFIRMATION_MODAL,
      isEdit: true,
      onConfirm: () => dispatch(deleteAccount(accountId)),
      text: 'Вы уверенны, что хотите удалить аккаунт?',
      confirmText: 'Да, удалить аккаунт'
    }))
  }

  return (
    <div className={classes.page}>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {
                <TableCell
                  key="actions"
                  style={{ minWidth: 70 }}
                >
                  {"Действия"}
                </TableCell>
              }
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {
                    <TableCell key="actions">
                      <IconButton component="span" onClick={() => editHandler(row)} color="primary">
                        <EditIcon/>
                      </IconButton>
                      <IconButton component="span" color="secondary" onClick={() => deleteHandler(row.id)}>
                        <DeleteIcon/>
                      </IconButton>
                    </TableCell>
                  }
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={accounts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
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
}

export default AccountsPage;