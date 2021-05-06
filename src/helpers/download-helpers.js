import { formatDateString } from './date-helpers';
import { calculateResultSum, entityToString } from './entity-helpers';

export const generateReport = (incomes, expenses, startDate, endDate) => {
  console.log(startDate)
  const incomeSum = calculateResultSum(incomes);
  const expensesSum = calculateResultSum(expenses);
  let report = `Отчёт о семейном бюджете с ${formatDateString(startDate)} по ${formatDateString(endDate)}\n\n`;
  report += `Доходы (${incomeSum} руб.):\n`
  report += incomes.map(
    (income, i) => `${i + 1}. ${entityToString(income)}\n`
  ).join('');
  report += `\nРасходы (${expensesSum} руб.):\n`
  report += expenses.map(
    (expense, i) => `${i + 1}. ${entityToString(expense)}\n`
  ).join('');
  report += `\nСемейный бюджет составляет ${incomeSum - expensesSum}руб.`;
  return report;
}

export const downloadTxtFile = (text) => {
  const element = document.createElement("a");
  const file = new Blob([text],
    {type: 'text/plain;charset=utf-8'});
  element.href = URL.createObjectURL(file);
  element.download = "report.txt";
  document.body.appendChild(element);
  element.click();
}