import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.scss';
import { nanoid } from 'nanoid';

const NewExpense = ({ onAddExpense }) => {
  const [isEdited, setIsEdited] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    };

    onAddExpense(expenseData);
    setIsEdited(false);
  };

  const startEditingHandler = () => {
    setIsEdited(true);
  };

  const cancelEditinghandler = () => {
    setIsEdited(false);
  };

  return (
    <div className="new-expense">
      {!isEdited ? (
        <button onClick={startEditingHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditinghandler}
        />
      )}
    </div>
  );
};

export default NewExpense;