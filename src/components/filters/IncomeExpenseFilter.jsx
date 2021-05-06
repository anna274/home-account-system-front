import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import FormSelect from 'components/form/FormSelect';
import useStyles from './styles';
import FormDatePicker from '../form/FormDatePicker';

const noneOption = {
  name: '-'
}

export default function IncomeExpenseFilter({ onSubmit }) {
  const classes = useStyles();
  const { data: bankAccounts } = useSelector(state => state.bankAccounts);
  const { data: categories } = useSelector(state => state.categories);

  const initialValues = {
    bankAccount: noneOption,
    category: noneOption,
    startDate: null,
    endDate: null,
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const renderValue = (selected) => selected?.name || '';

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={classes.container}>
        <div>
          <FormSelect
            classes={`${classes.select}`}
            name="bankAccount"
            formik={formik} label="Счёт"
            values={[noneOption, ...bankAccounts]}
            renderValue={renderValue}
          />
        </div>
        <div>
          <FormSelect
            classes={classes.select}
            name="category"
            formik={formik}
            label="Категория"
            values={[noneOption, ...categories]}
            renderValue={renderValue}
          />
        </div>
        <div>
          <FormDatePicker
            classes={classes.select}
            formik={formik}
            name="startDate"
            label="Начало диапозона"
          />
        </div>
        <div>
          <FormDatePicker
            formik={formik}
            classes={classes.select}
            name="endDate"
            label="Конец дтапозона"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          type='submit'
          style={{marginRight: 5}}
        >Применить</Button>
        <Button
          variant="contained"
          color="secondary"
          type='submit'
          onClick={formik.resetForm}
        >Сбросить</Button>
      </form>
    </div>
  );
}