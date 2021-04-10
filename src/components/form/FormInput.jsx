import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({formik, name, autoComplete = '', label, type="text"}) => {
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
    onChange={formik.handleChange}
    error={Boolean(touched && error)}
    helperText={touched && error}
    type={type}
  />)
}
