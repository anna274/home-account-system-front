import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({formik, name, autoComplete = '', label, type="text", disabled, multiline, rowsMax, InputProps={}, validationRegExp}) => {
  const error = formik.errors[name];
  const touched = formik.touched[name];
  return (
  <TextField
    variant="outlined"
    margin="normal"
    fullWidth
    id={name}
    label={label}
    name={name}
    autoComplete={autoComplete}
    autoFocus
    value={formik.values[name]}
    onChange={(e) => {
      if(validationRegExp && !e.target.value.match(validationRegExp) && e.target.value) {
        return
      }
      formik.handleChange(e)
    }
    }
    error={Boolean(touched && error)}
    helperText={touched && error}
    type={type}
    disabled={disabled}
    rowsMax={rowsMax}
    multiline={multiline}
    InputProps={InputProps}
  />)
}
