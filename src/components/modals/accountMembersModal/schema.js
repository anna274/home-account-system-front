import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string('Имя участника аккаунта')
    .max(25, 'Максимальная длина 25 символов')
    .required('Введите имя участника аккаунта'),
});

export { validationSchema };
