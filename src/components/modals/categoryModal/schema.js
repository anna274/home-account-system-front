import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string('Название категории')
    .max(25, 'Максимальная длина 25 символов')
    .required('Введите название категории'),
});

export { validationSchema };
