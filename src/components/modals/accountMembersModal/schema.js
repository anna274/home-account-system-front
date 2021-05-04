import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string('Имя участника аккаунта')
    .required('Введите имя участника аккаунта'),
});

export { validationSchema }