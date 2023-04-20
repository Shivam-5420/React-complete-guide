import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler= (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);
    disableEditing();
  }

  const enableEditing= () => {
    setIsEditing(true);
  }

  const disableEditing= () => {
    setIsEditing(false);
  }

  return (
  <div className='new-expense'>
    {!isEditing && <button onClick={enableEditing}>Add new Expense</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={disableEditing} />}
  </div>
  );
}

export default NewExpense;