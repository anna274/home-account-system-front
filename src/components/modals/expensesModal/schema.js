import * as yup from 'yup';

export default yup.object({
  category: yup
    .object()
    .test('empty-check','Выберите категорию', accountMember => Object.keys(accountMember) !== 0),
  bankAccount: yup
    .object()
    .test('empty-check','Выберите счёт', accountMember => Object.keys(accountMember) !== 0),
  sum: yup
    .number()
    .test('positive-check','Сумма должна быть больше 0', value => value > 0),
  note: yup
    .string('Заметки')
});
