import React from 'react';

import './ExpensesFilter.scss';

const ExpensesFilter = ({ selectedYear, onChangeFilteredYear }) => {
  const yearChangeHandler = e => {
    onChangeFilteredYear(e.target.value);
  };

  const getOptions = () => {
    let options = [];
    const currentYear = [new Date().getFullYear()];
    for (let i = 0; i < 5; i++) {
      options.push(currentYear - options.length);
    }
    return options;
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={yearChangeHandler}>
          <option value="">All</option>
          {getOptions().map((option) => 
            <option key={option} value={option}>{option}</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;