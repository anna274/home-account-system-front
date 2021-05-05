import * as yup from 'yup';

export default yup.object({
  startDate: yup.date(),
  endDate: yup.date(),
});
