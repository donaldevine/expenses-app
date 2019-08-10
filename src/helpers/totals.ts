import formatExpense from './formatExpense';
import { ExpenseData } from '../types';

export const totalValue = (expenses: ExpenseData[], type: string) => {
  const amount = expenses
    .filter(x => x.type === type)
    .map(x => x.value)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const formattedAmount = formatExpense(amount);
  return formattedAmount;
};

export const totalAmount = (expenses: ExpenseData[]) => {
    const totalIncomes = expenses
      .filter( x => x.type === "+")
      .map(x => x.value)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const totalExpenses = expenses
      .filter(x => x.type === "-")
      .map(x => x.value)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const totalAmount = formatExpense(totalIncomes - totalExpenses);
    return totalAmount;
  };