import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string('Название категории')
    .required('Введите название категории'),
});

export { validationSchema }