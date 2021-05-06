import { formatDateString } from 'helpers/date-helpers'
export const calculateResultSum = (rows) => rows.reduce((res, { sum }) => res + sum, 0);
export const entityToString = (row) => `${row.category.name} Сумма: ${row.sum}руб. Дата: ${formatDateString(row.date)}`