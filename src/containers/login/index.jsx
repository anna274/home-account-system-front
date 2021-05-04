import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { loginUser } from 'redux/actions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import FormInput from 'components/form/FormInput'
import validationSchema from './shema';

const Login =() => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      confirmedPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const bodyFormData = new FormData();
      console.log(values)
      bodyFormData.append('username', values.login);
      bodyFormData.append('password', values.password);
      dispatch(loginUser(bodyFormData))
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
          Вход в аккаунт
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <FormInput name="login" formik={formik} label="Логин"/>
          <FormInput name="password" formik={formik} label="Пароль" type="password"/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Нет аккаунта? Создать аккаунт"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;