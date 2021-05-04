import * as yup from 'yup';

export default yup.object({
  name: yup
    .string('Название банковского аккаунта')
    .required('Введте название банковского аккаунта'),
    accountMember: yup
    .object()
    .test('empty-check','Password must be at least 8 characters', accountMember => Object.keys(accountMember) !== 0),

});
