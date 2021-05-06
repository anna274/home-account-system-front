import React from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default ({formik, name, label, classes}) => {
  const error = formik.errors[name];
  const touched = formik.touched[name];
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes}
        margin="normal"
        id="date-picker-dialog"
        label={label}
        format="dd/MM/yyyy"
        value={formik.values[name]}
        onChange={(date) => formik.setFieldValue(name, date)}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        error={Boolean(touched && error)}
      />
    </MuiPickersUtilsProvider>
  )
}
