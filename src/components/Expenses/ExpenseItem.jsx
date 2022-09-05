import React from 'react';
import './ExpenseItem.scss';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ title, amount, date }) => {
  const fixedAmount = Number(amount).toFixed(2);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{fixedAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;