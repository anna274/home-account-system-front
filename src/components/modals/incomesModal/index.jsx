import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { createIncome, editIncome } from 'redux/actions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormInput from 'components/form/FormInput';
import FormSelect from 'components/form/FormSelect';
import FormDatePicker from 'components/form/FormDatePicker';
import useStyles from '../styles';
import validationSchema from './schema';

export default function BankAccountModal({ isOpen, onClose, isEdit, income }) {
  const classes = useStyles();
  const { actionRunning, data: bankAccounts } = useSelector(state => state.bankAccounts);
  const { data: categories } = useSelector(state => state.categories);
  const dispatch = useDispatch()

  const initialValues = !isEdit ?
    {
      category: null,
      bankAccount: null,
      date: new Date(),
      note: '',
      sum: 0,
    }: {
      ...income
    };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if(isEdit) {
        dispatch(editIncome(values));
      } else {
        dispatch(createIncome({ ...values, date: values.date.toISOString().split("T")[0] }));
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
              <FormSelect
                classes={`${classes.select} ${classes.withMarginButton}`}
                name="bankAccount"
                formik={formik} label="Счёт"
                values={bankAccounts}
                renderValue={renderValue}
              />
              <FormSelect
                classes={classes.select}
                name="category"
                formik={formik}
                label="Категория"
                values={categories}
                renderValue={renderValue}
              />
              <FormInput name="sum" formik={formik} label="Сумма" validationRegExp={/^\d{1,5}(\.\d{0,2}){0,1}$/}/>
              <FormDatePicker
                formik={formik}
                name="date"
                label="Дата"
              />
              <FormInput name="note" formik={formik} label="Заметка" multiline={true} rowsMax={3}/>
              <div className={classes.buttonsContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: '1rem' }}
                  disabled={actionRunning}
                >{isEdit ? 'Сохранить изменения' : 'Добавить запись'}</Button>
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