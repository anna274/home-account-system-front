import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { createBankAccount, editBankAccount } from 'redux/actions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormInput from 'components/form/FormInput';
import FormSelect from 'components/form/FormSelect';
import useStyles from '../styles';
import validationSchema from './schema';

export default function BankAccountModal({ isOpen, onClose, isEdit, bankAccount }) {
  const classes = useStyles();
  const { actionRunning } = useSelector((state) => state.bankAccounts);
  const { data: accountMembers } = useSelector((state) => state.accountMembers);
  const { id: accountId } = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const initialValues = !isEdit
    ? {
        name: '',
        accountMember: null,
      }
    : {
        ...bankAccount,
      };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (isEdit) {
        dispatch(editBankAccount(values));
      } else {
        dispatch(createBankAccount({ ...values, accountId, balance: 0 }));
      }
    },
  });

  const renderValue = (selected) => selected?.name || '';

  return (
    <div>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Данные о счёте
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <FormInput name="name" formik={formik} label="Навание счёта" />
              <FormSelect
                classes={classes.select}
                name="accountMember"
                formik={formik}
                label="Владелец счёта"
                values={accountMembers}
                renderValue={renderValue}
              />
              <div className={classes.buttonsContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: '1rem' }}
                  disabled={actionRunning}
                >
                  {isEdit ? 'Сохранить изменения' : 'Создать счёт'}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onClose}
                  disabled={actionRunning}
                >
                  Отмена
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
