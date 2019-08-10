import React from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import { ExpenseData } from '../../types';

interface ExpenseProps {
  expenses: ExpenseData[];
  deleteExpense: (index: number) => any;
}

const Expense: React.FC<ExpenseProps> = ({
  expenses,
  deleteExpense
}) => {
  const newExpenses = expenses.filter(x => x.type === "-");
  return (
    <div>
      <h1>Expense</h1>
      <div>
        {newExpenses.map((x, i) => (
          <ExpenseItem index={i}
                       key={i}
                       type={x.type}
                       value={x.value}
                       description={x.description}
                       deleteExpense={deleteExpense} />
        ))}
      </div>
    </div>
  );
};

export default Expense;