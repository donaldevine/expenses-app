import React from 'react';
import Income from './Income/Income';
import Expense from './Expense/Expense';

interface ExpensesProps {
  expenses: any;
  deleteExpense: (index: number) => any;
}

const Expenses: React.FC<ExpensesProps> = ({ expenses, deleteExpense }) => (
  <div>
    <Income expenses={expenses} deleteExpense={deleteExpense} />
    <Expense expenses={expenses} deleteExpense={deleteExpense} />
  </div>
);

export default Expenses;