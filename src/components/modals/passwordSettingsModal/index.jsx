import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { editAccountPassword } from 'redux/actions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormInput from 'components/form/FormInput';
import useStyles from '../styles';
import validationSchema from './schema';

export default function PasswordSettingModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    actionRunning,
    data: { id },
  } = useSelector((state) => state.user);

  const initialValues = {
    oldPassword: '',
    password: '',
    confirmedPassword: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      dispatch(
        editAccountPassword({ oldPassword: values.oldPassword, newPassword: values.password, id }),
      );
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
              Изменение логина
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <FormInput name="oldPassword" formik={formik} label="Текущий пароль" />
              <FormInput name="password" formik={formik} label="Новый пароль" type="password" />
              <FormInput
                name="confirmedPassword"
                formik={formik}
                label="Повторите новый пароль"
                type="password"
              />
              <div className={classes.buttonsContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: '1rem' }}
                  disabled={actionRunning}
                >
                  Изменить пароль
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
