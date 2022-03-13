import * as yup from 'yup';

const validationSchema = yup.object({
  login: yup
    .string('Логин')
    .max(25, 'Максимальная длина 25 символов')
    .required('Введите логин аккаунта'),
});

export { validationSchema };
