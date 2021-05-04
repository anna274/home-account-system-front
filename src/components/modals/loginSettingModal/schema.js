import * as yup from 'yup';

const validationSchema = yup.object({
  login: yup
    .string('Логин')
    .required('Введите логин аккаунта'),
});

export { validationSchema }