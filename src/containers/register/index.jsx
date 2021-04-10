import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import useStyles from './styles'
import validationSchema from './shema';
import { registerUserInfo } from 'services'
import FormInput from 'components/form/FormInput'

const Register =() => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      confirmedPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const bodyFormData = new FormData();
      bodyFormData.append('username', values.login);
      bodyFormData.append('password', values.password);
      // await registerUserInfo(bodyFormData);
      console.log(values)
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <FormInput name="login" formik={formik} label="Логин"/>
          <FormInput name="password" formik={formik} label="Пароль" type="password"/>
          <FormInput name="confirmedPassword" formik={formik} label="Повторите пароль" type="password"/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Создать аккаунт
          </Button>
          <Grid container>
          <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Уже есть аккаунт? Войти"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Register;