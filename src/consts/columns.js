import { formatDateString } from '../helpers';

export const incomeExpenseColumns = [
  {
    id: 'category',
    label: 'Категория',
    minWidth: 170,
    format: value => value.name
  },
  {
    id: 'bankAccount',
    label: 'Счёт',
    minWidth: 170,
    format: value => value.name
  },
  {
    id: 'sum',
    label: 'Сумма (руб)',
    minWidth: 170,
  },
  {
    id: 'date',
    label: 'Дата',
    minWidth: 170,
    format: value => formatDateString(value)
  },
];