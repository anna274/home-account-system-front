import * as yup from 'yup';

export default yup.object({
  login: yup.string('Логин').max(25, 'Максимальная длина 25 символов').required('Введте логин'),
  password: yup.string('Пароль').required('Введите пароль'),
});
