import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isClickOpen, setClickOpen] = useState(false);

    const openHandler =  () => {
        setClickOpen(true)
    }

    const closeOpenHandler = () => {
        setClickOpen(false)
    }

    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddNewExpense(expenseData)
        setClickOpen(false)
    }

    return <div className='new-expense'>
        {!isClickOpen && <button className='open-add__actions' onClick={openHandler}>Add New Expense</button>}
        {isClickOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeOpenHandler} />}
    </div>
}
export default NewExpense;