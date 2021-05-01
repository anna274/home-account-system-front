import * as yup from 'yup';

const createSchema = yup.object({
  login: yup
    .string('Логин')
    .required('Введте логин'),
  password: yup
    .string('Пароль')
    .min(6, 'Минимальная длина пароля 6 символов')
    .required('Введите пароль'),
  confirmedPassword: yup.string()
    .required('Подтвердите пароль')
    .oneOf([yup.ref('password'), null], 'Пароли дожны совпадать')
});

const editSchema = yup.object({});

export { createSchema, editSchema }