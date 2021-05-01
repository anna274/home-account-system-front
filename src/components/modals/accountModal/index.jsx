import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { createAccount, editAccount } from 'redux/actions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormInput from 'components/form/FormInput';
import FormSelect from 'components/form/FormSelect';
import useStyles from '../styles';
import { ACCOUNT_ROLES, USER_ROLE } from 'consts'
import { createSchema, editSchema } from './schema';

export default function AccountModal({ isOpen, onClose, isEdit, account }) {
  const classes = useStyles();
  const { actionRunning } = useSelector(state => state.accounts)
  const dispatch = useDispatch()

  const initialValues = !isEdit ?
    {
      login: '',
      password: '',
      confirmedPassword: '',
      roles: USER_ROLE
    }: {
      ...account,
      roles: account.roles.join(),
    };

  const formik = useFormik({
    initialValues,
    validationSchema: isEdit ? editSchema : createSchema,
    onSubmit: async (values) => {
      const { confirmedPassword, ...dataToSend } = values;
      if(isEdit) {
        dispatch(editAccount({ ...dataToSend, roles: [values.roles] }));
      } else {
        dispatch(createAccount({ ...dataToSend, roles: [values.roles] }));
      }
    },
  });

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
              Данные об аккаунте
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <FormInput name="login" formik={formik} label="Логин" disabled={isEdit}/>
              {
                !isEdit &&
                  <>
                    <FormInput name="password" formik={formik} label="Пароль" type="password"/>
                    <FormInput name="confirmedPassword" formik={formik} label="Повторите пароль" type="password"/>
                  </>
              }
              <FormSelect classes={classes.select} name="roles" formik={formik} label="Роль" values={ACCOUNT_ROLES}/>
              <div className={classes.buttonsContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: '1rem' }}
                  disabled={actionRunning}
                >{isEdit ? 'Сохранить изменения' : 'Создать аккаунт'}</Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onClose}
                  disabled={actionRunning}
                >Отмена</Button>
              </div>

            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}