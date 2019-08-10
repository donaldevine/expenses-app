import React from 'react';
import IncomeItem from './IncomeItem/IncomeItem';
import { ExpenseData } from '../../types';

interface IncomeProps {
  expenses: ExpenseData[];
  deleteExpense: any;
}

const Income: React.FC<IncomeProps> = ({
  expenses,
  deleteExpense
}) => {
  const incomes = expenses.filter(x => x.type === "+");
  return (
    <div>
      <h1>Income</h1>
      <div>
        {incomes.map((x, i) => (
          <IncomeItem index={i}
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

export default Income;