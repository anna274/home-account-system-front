import * as yup from 'yup';

export default yup.object({
  login: yup
    .string('Логин')
    .required('Введте логин'),
  password: yup
    .string('Пароль')
    .required('Введите пароль'),
});