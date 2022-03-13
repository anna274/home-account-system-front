import * as yup from 'yup';

export default yup.object({
  oldPassword: yup.string('Текущий пароль').required('Введите текущий пароль'),
  password: yup
    .string('Новый пароль')
    .min(6, 'Минимальная длина пароля 6 символов')
    .max(25, 'Максимальная длина 25 символов')
    .required('Введите новый пароль'),
  confirmedPassword: yup
    .string()
    .required('Подтвердите новый пароль')
    .oneOf([yup.ref('password'), null], 'Пароли дожны совпадать'),
});
