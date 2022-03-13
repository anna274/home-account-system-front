import * as yup from 'yup';

export default yup.object({
  name: yup
    .string('Название банковского аккаунта')
    .max(25, 'Максимальная длина 25 символов')
    .required('Введте название банковского аккаунта'),
  accountMember: yup
    .object()
    .test('empty-check', 'Обязательное поле', (accountMember) => Object.keys(accountMember) !== 0),
});
