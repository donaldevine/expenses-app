import { useState } from 'react';
import { ExpenseData } from '../types/index';

const useBudget = () => {
    const [expenses, setExpenses] = useState<ExpenseData[]>([]);
    const addExpense = (expense: ExpenseData) => {
      const newExpenses : ExpenseData[] = [...expenses, expense];
      setExpenses(newExpenses);
      console.log(newExpenses);
    };
    const deleteExpense = (index: number) => {
      const newExpenses = [...expenses];
      newExpenses.splice(index, 1);
      setExpenses(newExpenses);
    };
    return { expenses, addExpense, deleteExpense };
  };

  export default useBudget;