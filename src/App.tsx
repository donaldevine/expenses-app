import * as React from 'react';
import {useState}  from 'react';
import Budget from './Budget/Budget';
import Add from './Add/Add';
import Expenses from './Expenses/Expenses';
import useBudget from './hooks/useBudget';

const App = () => {
  const { expenses, addExpense, deleteExpense } = useBudget();
  return (
    <div>
      <Budget expenses={expenses} />
      <Add expenses={expenses} addExpense={addExpense} />
      <Expenses expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;