import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default ({formik, name, label, defaultValue, values = [], classes={}}) => {
  const error = formik.errors[name];
  const touched = formik.touched[name];
  return (
    <>
      {
        label &&
        <InputLabel shrink id={name}>
          {label}
        </InputLabel>
      }
      <Select
        labelId={name}
        id={name}
        value={formik.values[name] || defaultValue}
        onChange={(e) => formik.setFieldValue(name, e.target.value)}
        displayEmpty
        className={classes}
        error={Boolean(touched && error)}
      >
        {
          values.map(value => <MenuItem value={value}>{value?.name || value}</MenuItem>)
        }
      </Select>
    </>
    )
}
