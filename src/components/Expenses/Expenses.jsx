import React, { useState } from 'react';
import './Expenses.scss';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = ({ localExpenses }) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const items = localExpenses.map(obj => {
    return {...obj, date: new Date(obj.date)}
  });

  const filteredExpenses = !filteredYear
    ? items
    : items
      .filter(
        expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilteredYear={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;