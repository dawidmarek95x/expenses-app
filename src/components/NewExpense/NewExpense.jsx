import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.scss';
import { nanoid } from 'nanoid';

const NewExpense = ({onAddExpense}) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    };

    onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;